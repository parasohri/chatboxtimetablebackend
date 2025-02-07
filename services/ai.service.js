//
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyByJQK6P7XfBICG3hdcRL4ulIC_pBAqbb4");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" , generationConfig: {
  responseMimeType: "application/json",
  temperature: 0.4,
},
systemInstruction: `"You are a timetable manager for a college. The timetable includes subjects, faculty, and semester details. When a user (student or faculty) asks about a specific class, faculty schedule, or subject, provide the response in JSON format. Ensure the JSON is structured correctly so it can be parsed using JSON.parse(). Include details such as day, time, subject, and semester. If a faculty member asks for their schedule, return only their assigned classes. If a student asks about a subject, return only the relevant schedule. Maintain accuracy in all responses." '{
  "CSE_6th_Sem": {
    "Monday": [
      { "time": "9:00-10:00", "subject": "IT-603", "faculty": "AS" },
      { "time": "10:00-11:00", "subject": "CS-602", "faculty": "NK" },
      { "time": "11:15-12:15", "subject": "CS-605", "faculty": "AG" },
      { "time": "12:15-1:15", "subject": "CS-603", "faculty": "ST" },
      { "time": "2:00-3:00", "subject": "CS-601", "faculty": "NC" },
      { "time": "3:00-5:00", "subject": "CS-613", "faculty": "AS" }
    ],
    "Tuesday": [
      { "time": "9:00-10:00", "subject": "CS-605", "faculty": "AG" },
      { "time": "10:00-11:00", "subject": "CS-601", "faculty": "NC" },
      { "time": "11:15-12:15", "subject": "CS-604", "faculty": "AS" },
      { "time": "12:15-1:15", "subject": "CS-602", "faculty": "NK" },
      { "time": "2:00-3:00", "group1": "CS-604", "group2": "CS-601" },
      { "time": "3:00-4:00", "group1": "CS-601", "group2": "CS-604" }
    ],
    "Wednesday": [
      { "time": "9:00-10:00", "subject": "CS-603", "faculty": "ST" },
      { "time": "10:00-11:00", "subject": "CS-606", "faculty": "NK" },
      { "time": "11:15-12:15", "subject": "CS-605", "faculty": "AG" },
      { "time": "12:15-1:15", "subject": "CS-601", "faculty": "NC" },
      { "time": "2:00-3:00", "subject": "IT-603", "faculty": "AS" },
      { "time": "3:00-4:00", "subject": "CS-602", "faculty": "NK" }
    ],
    "Thursday": [
      { "time": "9:00-10:00", "subject": "CS-604", "faculty": "AS" },
      { "time": "10:00-11:00", "subject": "CS-606", "faculty": "NK" },
      { "time": "11:15-1:15", "group1": "CS-611", "faculty1": "NC", "group2": "CS-612", "faculty2": "NK" },
      { "time": "2:00-3:00", "group1": "CS-603", "group2": "CS-605" },
      { "time": "3:00-4:00", "group1": "CS-605", "group2": "CS-603" }
    ],
    "Friday": [
      { "time": "9:00-10:00", "subject": "CS-603", "faculty": "ST" },
      { "time": "10:00-11:00", "subject": "CS-604", "faculty": "AS" },
      { "time": "11:15-12:15", "subject": "CS-606", "faculty": "NK" },
      { "time": "12:15-1:15", "subject": "IT-603", "faculty": "AS" },
      { "time": "2:00-4:00", "group1": "CS-612", "faculty1": "NK", "group2": "CS-611", "faculty2": "NC" }
    ]
  },
  "CSE_4th_Sem": {
    "Monday": [
      { "time": "9:00-10:00", "subject": "CSPC-413", "faculty": "NS" },
      { "time": "10:00-11:00", "subject": "CSPC-412", "faculty": "NC" },
      { "time": "11:15-12:15", "subject": "CSPC-415", "faculty": "NS" },
      { "time": "12:15-1:15", "subject": "CSPC-414", "faculty": "NK" },
      { "time": "2:00-4:00", "group1": "CSPC-413", "faculty1": "NS", "group2": "CSPC-414", "faculty2": "NK" }
    ],
    "Tuesday": [
      { "time": "9:00-10:00", "subject": "CSPC-413", "faculty": "NS" },
      { "time": "10:00-11:00", "subject": "CSPC-414", "faculty": "NK" },
      { "time": "11:15-12:15", "subject": "CSPC-411", "faculty": "SK" },
      { "time": "12:15-1:15", "subject": "ECEPC-412", "faculty": "VV" },
      { "time": "2:00-4:00", "group1": "CSPC-414", "faculty1": "NK", "group2": "CSPC-413", "faculty2": "NS" }
    ],
    "Wednesday": [
      { "time": "9:00-10:00", "subject": "CSPC-413", "faculty": "NS" },
      { "time": "10:00-11:00", "group1": "CSPC-413", "group2": "CSPC-412", "faculty2": "NC" },
      { "time": "11:15-12:15", "subject": "CSPC-411", "faculty": "SK" },
      { "time": "12:15-1:15", "subject": "ECEPC-412", "faculty": "VV" },
      { "time": "2:00-4:00", "group1": "CSPC-415", "faculty1": "NS" }
    ],
    "Thursday": [
      { "time": "9:00-10:00", "subject": "CSPC-412", "faculty": "NC" },
      { "time": "10:00-11:00", "subject": "CSPC-415", "faculty": "NS" },
      { "time": "11:15-12:15", "subject": "CSPC-411", "faculty": "SK" },
      { "time": "12:15-1:15", "subject": "ECEPC-412", "faculty": "VV" },
      { "time": "2:00-4:00", "group1": "CSPC-415", "faculty1": "NS" }
    ],
    "Friday": [
      { "time": "9:00-10:00", "subject": "CSPC-412", "faculty": "NC" },
      { "time": "10:00-11:00", "subject": "CSPC-414", "faculty": "NK" },
      { "time": "11:15-12:15", "subject": "CSPC-415", "faculty": "NS" },
      { "time": "12:15-1:15", "group1": "CSPC-412", "faculty1": "NC", "group2": "CSPC-413", "faculty2": "NS" },
      { "time": "2:00-3:00", "group1": "CSPC-415", "faculty1": "NS" },
      { "time": "3:00-4:00", "group2": "CSPC-415", "faculty2": "NS" }
    ]
  }
}


' the faculty name stands for '
AS-ANURAG SHARMA
AG-ANUJ GUPTA
ST-SHIVANI THAPA
NK-NIVEDITA KASHYAP
NC-NAMITA CHANDEL
NS-NAVDEEP SHARMA
'
'give response to the user query in good way and generate in text format if user or faculty ask about there class then tell about their class only give result in such a way that can be parse by json.parse'

`,}
);
let AIService = async(prompt)=> {

 

const result = await model.generateContent(prompt);
return result.response.text();}
export default AIService;