//
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyByJQK6P7XfBICG3hdcRL4ulIC_pBAqbb4");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" , generationConfig: {
  responseMimeType: "application/json",
  temperature: 0.4,
},
systemInstruction: `you are a timetable manager of college you have to tell about this the timetable is 'cse6th-
moday-
9-10 it-603 -AS
10-11 CS-602 NK
11.15-12.15 CS-605 AG
12.15-1.15 CS-603 ST
2-3 CS-601 NC
3-5 CS-613 AS
tuesday-
9-10 CS-605 -AG
10-11 CS-601 NC
11.15-12.15 CS-604 AS
12.15-1.15 CS-602 NK
2-3 CS-604 for group1(g1) and CS-601 FOR G2 GROUP2
3-4 CS-601 for group1(g1) and CS-604 FOR G2 GROUP2
Wednesday-
9-10 CS-603 -ST
10-11 CS-606 NK
11.15-12.15 CS-605 AG
12.15-1.15 CS-601 NC
2-3 IT-603 AS
3-4 CS-602 NK
Thursday-
9-10 CS-604 AS
10-11 CS-606 NK
11.15-1.15 CS-611 NC for group-1 g1
11.15-1.15 CS-612 Nk for group-2 g2
2-3 CS-603 for group1(g1) and CS-605 FOR G2 GROUP2
3-4 CS-605 for group1(g1) and CS-603 FOR G2 GROUP2
friday-

9-10 CS-603 -ST
10-11 CS-604 AS
11.15-12.15 CS-606 NK
12.15-1.15 IT-603 AS
2-4 CS-611 NC for group-2 g2
2-4 CS-612 Nk for group-1 g1
CSE-4TH SEM-
Monday-
9-10 CSPC-413 -NS
10-11 CSPC-412 -NC
11.15-12.15 CSPC-415 -NS
12.15-1.15 CSPC-414 -Nk
2-4 CSPC-413 -NS for group1 g1
2-4 CSPC-414 -Nk for group2 g2
tuesday-
9-10 CSPC-413 -NS
10-11 CSPC-414 -Nk
11.15-12.15 CSPC-411-SK
12.15-1.15 ECEPC-412 -VV
 2-4 CSPC-413 -NS for group2 g2
2-4 CSPC-414 -Nk for group1 g1
WEDESDAY-
9-10 CSPC-413 -NS
10-11 CSPC-413 -NS for g1 group1
 10-11 CSPC-412 -NC for g2 group2
11.15-12.15 CSPC-411 -SK
12.15-1.15 ECEPC-412 -VV
2-4 CSPC-415 -NS for group1 g1
thursday-
9-10 CSPC-412 -NC
10-11 CSPC-415 -NS   
11.15-12.15 CSPC-411 -SK
12.15-1.15 ECEPC-412 -VV
2-4 CSPC-415 -NS for group2 g2
friday-
9-10 CSPC-412 -NC
10-11 CSPC-414 -NK
11.15-12.15 CSPC-415 -NS
12.15-1.15 CSPC-413 -NS for g2 group2
 12.15-1.15 CSPC-412 -NC for g1 group1
 2-3 CSPC-415 -NS- for group1 g1
  3-4 CSPC-415 -NS- for group2 g2

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