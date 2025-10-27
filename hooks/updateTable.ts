"use server";
import { google } from "googleapis";
import { qna } from "@/data/qna";

export async function updateTable(
  name: string,
  answers: string[],
  lookbacks: number,
  timeTaken: number,
  logs: string[][]
) {
  try {
    const auth = await google.auth.getClient({
      scopes: process.env.SCOPES as string,
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
    });

    const sheets = google.sheets({ version: "v4", auth });

    const getResult = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.SHEET_ID as string,
      range: "AnswerKey!A:C",
    });

    if (getResult.status !== 200) {
      throw new Error(`Failed to fetch answer keys: ${getResult.statusText}`);
    }

    if (!getResult.data.values) {
      throw new Error("No answer key data found.");
    }

    const answerKeys = Array(qna.length).fill("-") as string[];

    getResult.data.values.forEach((row) => {
      const questionId = parseInt(row[0], 10);
      const answer = row[1];
      answerKeys[questionId - 1] = answer;
    });

    let score = 0;
    answers.forEach((ans, index) => {
      if (ans === answerKeys[index]) {
        score += 1;
      }
    });

    const updateResult = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID as string,
      range: "Data",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            name,
            ...answers,
            score.toString(),
            lookbacks.toString(),
            timeTaken.toString(),
          ],
        ],
      },
    });

    if (updateResult.status !== 200) {
      throw new Error(`Failed to append data: ${updateResult.statusText}`);
    }

    const logResult = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SHEET_ID as string,
      range: "Logs",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: logs,
      },
    });

    if (logResult.status !== 200) {
      throw new Error(`Failed to append logs: ${logResult.statusText}`);
    }

    return { success: true, message: "Answers submitted successfully!" };
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : String(error);
    console.error("Server action error:", message);
    return { success: false, message };
  }
}
