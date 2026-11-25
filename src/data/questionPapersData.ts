export interface QuestionPaperItem {
  id: string;
  name: string;
  classes: string;
  examTitle: string;
  year: string;
  questionPaperUrl: string;
  answerKeyUrl?: string;
}

export interface QuestionPaperSection {
  id: string;
  year: string;
  title: string;
  badge: string;
  items: QuestionPaperItem[];
}

export const COMMON_ANSWER_KEY_URL_2026 =
  "https://pixels-official.s3.ap-south-1.amazonaws.com/FINAL-AnswerKey-58th-NMTC-Screening-2026-27.pdf";

export const QUESTION_PAPER_SECTIONS: QuestionPaperSection[] = [
  {
    id: "section-2026",
    year: "2026 – 2027",
    title: "Question Papers - Screening NMTC 2026 – 2027",
    badge: "Current Screening",
    items: [
      {
        id: "2026-primary-v-vi",
        name: "Primary Level (V & VI)",
        classes: "Classes V & VI",
        examTitle: "Screening NMTC 2026 – 2027",
        year: "2026 – 2027",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/1_QP_Primary_Gr_5th_6th_Screening_NMTC_2026.pdf",
        answerKeyUrl: COMMON_ANSWER_KEY_URL_2026,
      },
      {
        id: "2026-sub-junior-vii-viii",
        name: "Sub-junior Level (VII & VIII)",
        classes: "Classes VII & VIII",
        examTitle: "Screening NMTC 2026 – 2027",
        year: "2026 – 2027",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/2_QP_Sub-Junior_Gr_7th_8th_SCREENING_NMTC_2026.pdf",
        answerKeyUrl: COMMON_ANSWER_KEY_URL_2026,
      },
      {
        id: "2026-junior-ix-x",
        name: "Junior Level (IX & X)",
        classes: "Classes IX & X",
        examTitle: "Screening NMTC 2026 – 2027",
        year: "2026 – 2027",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/3_QP_Junior_Gr_9th_10th_SCREENING_NMTC_2026.pdf",
        answerKeyUrl: COMMON_ANSWER_KEY_URL_2026,
      },
      {
        id: "2026-inter-xi-xii",
        name: "Inter Level (XI & XII)",
        classes: "Classes XI & XII",
        examTitle: "Screening NMTC 2026 – 2027",
        year: "2026 – 2027",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/4_QP_Inter_Gr_11th_12th_SCREENING_NMTC_2026.pdf",
        answerKeyUrl: COMMON_ANSWER_KEY_URL_2026,
      },
    ],
  },
  {
    id: "section-2024",
    year: "2024",
    title: "Question Papers - Final NMTC 2024",
    badge: "Final Exam 2024",
    items: [
      {
        id: "2024-primary-v-vi",
        name: "Primary Level (V & VI)",
        classes: "Classes V & VI",
        examTitle: "Final NMTC 2024",
        year: "2024",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/Primary+FInal+Question+Paper-2024.pdf",
      },
      {
        id: "2024-sub-junior-vii-viii",
        name: "Sub-junior Level (VII & VIII)",
        classes: "Classes VII & VIII",
        examTitle: "Final NMTC 2024",
        year: "2024",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/Sub-Junior+FInal+Question+Paper-2024.pdf",
      },
      {
        id: "2024-junior-ix-x",
        name: "Junior Level (IX & X)",
        classes: "Classes IX & X",
        examTitle: "Final NMTC 2024",
        year: "2024",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/Junior+FInal+Question+Paper-2024.pdf",
      },
      {
        id: "2024-inter-xi-xii",
        name: "Inter Level (XI & XII)",
        classes: "Classes XI & XII",
        examTitle: "Final NMTC 2024",
        year: "2024",
        questionPaperUrl:
          "https://pixels-official.s3.ap-south-1.amazonaws.com/Inter+FInal+Question+Paper-2024.pdf",
      },
    ],
  },
];
