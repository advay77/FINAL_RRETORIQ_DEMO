export interface FrameworkQA {
    id: number;
    question: string;
    answer: {
        S?: string;
        T?: string;
        A?: string;
        R?: string;
        O?: string; // For SOAR
        P?: string; // For PREP - Point
        E?: string; // For PREP - Example
        ConcludingPoint?: string; // For PREP - Concluding Point
        Why?: string; // For WHW
        How?: string; // For WHW
        What?: string; // For WHW
        Context?: string; // For CAR
        Action?: string; // For CAR/A3
        Result?: string; // For CAR
        Analysis?: string; // For A3
        Adjustment?: string; // For A3
    };
}

export const starFrameworkQuestions: FrameworkQA[] = [
    {
        id: 1,
        question: "Tell me about a time you worked under pressure.",
        answer: {
            S: "During my second semester, we had overlapping project submissions and exams in the same week.",
            T: "I had to complete a major assignment while preparing for two internal tests.",
            A: "I listed tasks by urgency, blocked focused study hours, and completed the project in smaller daily milestones instead of last-minute work.",
            R: "I submitted everything on time and scored well, which taught me how planning reduces pressure."
        }
    },
    {
        id: 2,
        question: "Describe a situation where you faced a challenge.",
        answer: {
            S: "In a group project, one teammate stopped responding close to the deadline.",
            T: "Our task was to deliver a complete presentation without delays.",
            A: "I redistributed the pending work, informed the mentor early, and simplified the scope to ensure quality.",
            R: "The project was accepted, and I learned how adaptability matters more than ideal planning."
        }
    },
    {
        id: 3,
        question: "Tell me about a time you showed initiative.",
        answer: {
            S: "Our college club events had very low student participation.",
            T: "I wanted to improve engagement.",
            A: "I suggested short interactive segments instead of long talks and promoted them via WhatsApp groups.",
            R: "Attendance improved, and the club adopted this format for future events."
        }
    },
    {
        id: 4,
        question: "Describe a time you had to meet a tight deadline.",
        answer: {
            S: "During a hackathon, our demo was scheduled earlier than expected.",
            T: "We had to make the product stable quickly.",
            A: "I focused on core features, removed unstable ones, and coordinated testing with teammates.",
            R: "The demo worked smoothly, and judges appreciated the clarity."
        }
    },
    {
        id: 5,
        question: "Tell me about a time you worked in a team.",
        answer: {
            S: "In a semester project, our team had members from different skill levels.",
            T: "We needed to deliver a working solution together.",
            A: "I ensured everyone had clear responsibilities and regularly checked progress.",
            R: "The project was completed smoothly and strengthened our teamwork."
        }
    },
    {
        id: 6,
        question: "Describe a situation where you handled responsibility.",
        answer: {
            S: "I was responsible for submitting final documentation for a project.",
            T: "Accuracy and timely submission were critical.",
            A: "I reviewed the document twice and cross-checked requirements before submission.",
            R: "The project was approved without revisions."
        }
    },
    {
        id: 7,
        question: "Tell me about a time you solved a problem.",
        answer: {
            S: "Our application kept crashing during testing.",
            T: "My task was to identify the root cause.",
            A: "I isolated modules, reviewed logs, and fixed a memory handling issue.",
            R: "The app became stable, improving overall performance."
        }
    },
    {
        id: 8,
        question: "Describe a time you handled failure.",
        answer: {
            S: "In my first presentation, I forgot key points due to nervousness.",
            T: "I needed to recover without losing confidence.",
            A: "I paused, referred briefly to notes, and continued calmly.",
            R: "Though not perfect, I finished confidently and later improved through practice."
        }
    },
    {
        id: 9,
        question: "Tell me about a time you received feedback.",
        answer: {
            S: "A mentor pointed out my explanations were too technical.",
            T: "I needed to improve clarity.",
            A: "I practiced simplifying explanations and using examples.",
            R: "My communication improved, especially in group discussions."
        }
    },
    {
        id: 10,
        question: "Describe a situation where you adapted to change.",
        answer: {
            S: "Midway through a project, requirements were updated.",
            T: "We had to modify our approach quickly.",
            A: "I adjusted the plan and redistributed tasks accordingly.",
            R: "The updated version was delivered on time."
        }
    },
    {
        id: 11,
        question: "Tell me about a time you handled conflict.",
        answer: {
            S: "A teammate disagreed with my approach.",
            T: "We needed to decide quickly.",
            A: "I suggested listing pros and cons of both ideas.",
            R: "We reached a balanced decision without conflict."
        }
    },
    {
        id: 12,
        question: "Describe a time you helped someone.",
        answer: {
            S: "A junior struggled with a subject before exams.",
            T: "I wanted to help them understand concepts.",
            A: "I explained topics using simple examples and short sessions.",
            R: "They passed confidently, and it reinforced my own understanding."
        }
    },
    {
        id: 13,
        question: "Tell me about a time you managed multiple tasks.",
        answer: {
            S: "During exam week, I had both academic and club responsibilities.",
            T: "I needed to balance both.",
            A: "I created a time-based schedule and followed strict priorities.",
            R: "Everything was completed without burnout."
        }
    },
    {
        id: 14,
        question: "Describe a time you learned something quickly.",
        answer: {
            S: "I had to learn a new tool for a project.",
            T: "The deadline was close.",
            A: "I focused on essential features through tutorials and practice.",
            R: "I completed my part successfully and gained confidence."
        }
    },
    {
        id: 15,
        question: "Tell me about a time you took ownership.",
        answer: {
            S: "Our group lacked coordination near submission.",
            T: "Someone needed to take charge.",
            A: "I tracked tasks, followed up with members, and ensured completion.",
            R: "The project was submitted smoothly."
        }
    },
    {
        id: 16,
        question: "Describe a time you improved a process.",
        answer: {
            S: "Our team meetings were unstructured.",
            T: "Productivity was low.",
            A: "I suggested a fixed agenda and time limit.",
            R: "Meetings became shorter and more effective."
        }
    },
    {
        id: 17,
        question: "Tell me about a time you handled stress.",
        answer: {
            S: "Before my first interview, I felt anxious.",
            T: "I needed to perform well.",
            A: "I practiced mock interviews and focused on breathing techniques.",
            R: "I stayed calm and answered confidently."
        }
    },
    {
        id: 18,
        question: "Describe a time you worked with limited resources.",
        answer: {
            S: "We had minimal tools for a college project.",
            T: "We still had to deliver results.",
            A: "We used free tools and optimized available resources.",
            R: "The project met expectations without extra cost."
        }
    },
    {
        id: 19,
        question: "Tell me about a time you supported a team goal.",
        answer: {
            S: "Our team aimed to finish early for review.",
            T: "Everyone had to cooperate.",
            A: "I completed my tasks early and helped others.",
            R: "We submitted ahead of time."
        }
    },
    {
        id: 20,
        question: "Describe a time you showed leadership.",
        answer: {
            S: "Our team was confused about task allocation.",
            T: "Someone needed to guide.",
            A: "I clarified roles and ensured alignment.",
            R: "Execution improved significantly."
        }
    },
    {
        id: 21,
        question: "Tell me about a time you learned from a mistake.",
        answer: {
            S: "I once underestimated task complexity.",
            T: "It caused delays.",
            A: "I analyzed the gap and planned better next time.",
            R: "Future tasks were handled more accurately."
        }
    },
    {
        id: 22,
        question: "Describe a time you communicated effectively.",
        answer: {
            S: "Our mentor needed quick project updates.",
            T: "Clarity was important.",
            A: "I summarized progress concisely.",
            R: "Decisions were made faster."
        }
    },
    {
        id: 23,
        question: "Tell me about a time you exceeded expectations.",
        answer: {
            S: "A project required only basic implementation.",
            T: "I wanted to add value.",
            A: "I added documentation and minor improvements.",
            R: "The project received appreciation."
        }
    },
    {
        id: 24,
        question: "Describe a time you worked with someone difficult.",
        answer: {
            S: "A teammate often missed deadlines.",
            T: "We needed coordination.",
            A: "I communicated expectations clearly and followed up.",
            R: "Collaboration improved."
        }
    },
    {
        id: 25,
        question: "Tell me about a time you handled accountability.",
        answer: {
            S: "I made an error in a submission.",
            T: "I needed to address it.",
            A: "I informed the mentor and corrected it quickly.",
            R: "The issue was resolved, reinforcing trust."
        }
    }
];

export const soarFrameworkQuestions: FrameworkQA[] = [
    {
        id: 1,
        question: "What is one weakness you are working on?",
        answer: {
            S: "Earlier, I struggled with speaking confidently in front of others.",
            O: "I overthought my words and feared making mistakes.",
            A: "I started practicing structured answers and recording myself regularly.",
            R: "Now, I'm more comfortable expressing ideas clearly and confidently."
        }
    },
    {
        id: 2,
        question: "What area do you want to improve professionally?",
        answer: {
            S: "I noticed my explanations were sometimes unclear.",
            O: "I assumed others understood my thought process automatically.",
            A: "I began simplifying my points and asking for feedback.",
            R: "My communication became clearer and more effective."
        }
    },
    {
        id: 3,
        question: "Tell me about a skill you are currently developing.",
        answer: {
            S: "I realized time management was a challenge during exams.",
            O: "I often underestimated how long tasks would take.",
            A: "I started planning my day with realistic buffers.",
            R: "I now manage deadlines with less stress."
        }
    },
    {
        id: 4,
        question: "What feedback have you received that helped you grow?",
        answer: {
            S: "A mentor mentioned I focused too much on details.",
            O: "This sometimes slowed overall progress.",
            A: "I learned to prioritize impact over perfection.",
            R: "My execution speed improved significantly."
        }
    },
    {
        id: 5,
        question: "What personal habit are you trying to change?",
        answer: {
            S: "I used to delay starting difficult tasks.",
            O: "Procrastination increased last-minute pressure.",
            A: "I broke tasks into smaller steps and started early.",
            R: "My productivity improved and stress reduced."
        }
    },
    {
        id: 6,
        question: "Tell me about a challenge in your communication.",
        answer: {
            S: "During discussions, I hesitated to share opinions.",
            O: "I feared disagreement.",
            A: "I practiced framing opinions clearly using simple structures.",
            R: "I now participate more actively in discussions."
        }
    },
    {
        id: 7,
        question: "What professional weakness have you identified?",
        answer: {
            S: "I found it hard to say no to additional work.",
            O: "This affected focus on priority tasks.",
            A: "I learned to communicate timelines more clearly.",
            R: "My workload is now more manageable."
        }
    },
    {
        id: 8,
        question: "How have you worked on handling stress?",
        answer: {
            S: "I felt stressed before important presentations.",
            O: "Nervousness affected delivery.",
            A: "I practiced mock presentations and breathing techniques.",
            R: "I now stay calmer under pressure."
        }
    },
    {
        id: 9,
        question: "What soft skill are you improving?",
        answer: {
            S: "I realized listening was an area to improve.",
            O: "I sometimes prepared responses instead of listening fully.",
            A: "I consciously practiced active listening.",
            R: "Team communication improved significantly."
        }
    },
    {
        id: 10,
        question: "What is a mistake you are actively correcting?",
        answer: {
            S: "I once overlooked details in a submission.",
            O: "Rushing caused errors.",
            A: "I added a review step before finalizing work.",
            R: "Accuracy improved across tasks."
        }
    },
    {
        id: 11,
        question: "Tell me about a confidence-related challenge.",
        answer: {
            S: "Early in college, I lacked confidence in interviews.",
            O: "Fear of judgment held me back.",
            A: "I practiced mock interviews regularly.",
            R: "My confidence improved steadily."
        }
    },
    {
        id: 12,
        question: "What leadership skill are you developing?",
        answer: {
            S: "I struggled with delegating tasks initially.",
            O: "I tried to do everything myself.",
            A: "I learned to trust teammates and assign clear roles.",
            R: "Team efficiency improved."
        }
    },
    {
        id: 13,
        question: "What technical weakness are you addressing?",
        answer: {
            S: "I lacked familiarity with certain tools.",
            O: "This slowed project progress.",
            A: "I learned essentials through tutorials and practice.",
            R: "I now work more independently."
        }
    },
    {
        id: 14,
        question: "How are you improving decision-making?",
        answer: {
            S: "I used to overanalyze decisions.",
            O: "It caused delays.",
            A: "I set decision deadlines and focused on key factors.",
            R: "Decision-making became faster and clearer."
        }
    },
    {
        id: 15,
        question: "Tell me about a habit you improved recently.",
        answer: {
            S: "I stayed up late completing tasks.",
            O: "It affected focus the next day.",
            A: "I planned tasks earlier and followed a routine.",
            R: "My energy and consistency improved."
        }
    },
    {
        id: 16,
        question: "What interpersonal skill are you working on?",
        answer: {
            S: "I found giving feedback uncomfortable.",
            O: "I worried about hurting feelings.",
            A: "I learned to give constructive and respectful feedback.",
            R: "Team communication improved."
        }
    },
    {
        id: 17,
        question: "What learning challenge have you overcome?",
        answer: {
            S: "I struggled with understanding complex concepts quickly.",
            O: "Passive learning wasn't effective.",
            A: "I switched to active learning with examples.",
            R: "My comprehension improved."
        }
    },
    {
        id: 18,
        question: "How are you improving self-discipline?",
        answer: {
            S: "I lacked consistency earlier.",
            O: "Motivation fluctuated.",
            A: "I built small daily habits.",
            R: "Consistency became easier."
        }
    },
    {
        id: 19,
        question: "What presentation skill are you working on?",
        answer: {
            S: "My presentations lacked structure.",
            O: "Ideas felt scattered.",
            A: "I practiced using frameworks.",
            R: "Presentations became clearer."
        }
    },
    {
        id: 20,
        question: "What teamwork challenge did you face?",
        answer: {
            S: "I struggled adjusting to different working styles.",
            O: "Misalignment caused delays.",
            A: "I communicated expectations clearly.",
            R: "Collaboration improved."
        }
    },
    {
        id: 21,
        question: "What mindset shift helped you grow?",
        answer: {
            S: "I used to avoid challenges.",
            O: "Fear of failure limited growth.",
            A: "I started viewing challenges as learning opportunities.",
            R: "My confidence increased."
        }
    },
    {
        id: 22,
        question: "What academic weakness did you overcome?",
        answer: {
            S: "I found certain subjects difficult.",
            O: "I relied only on lectures.",
            A: "I practiced more problems independently.",
            R: "My performance improved."
        }
    },
    {
        id: 23,
        question: "How did you improve your adaptability?",
        answer: {
            S: "Sudden changes frustrated me earlier.",
            O: "I resisted change mentally.",
            A: "I focused on understanding the reason behind changes.",
            R: "I adapted faster."
        }
    },
    {
        id: 24,
        question: "What communication habit did you refine?",
        answer: {
            S: "I spoke too fast during explanations.",
            O: "Listeners struggled to follow.",
            A: "I practiced pacing consciously.",
            R: "My clarity improved."
        }
    },
    {
        id: 25,
        question: "What personal growth are you proud of?",
        answer: {
            S: "I struggled with self-belief initially.",
            O: "Comparison affected confidence.",
            A: "I focused on personal progress instead.",
            R: "I now approach challenges with confidence."
        }
    }
];

export const carFrameworkQuestions: FrameworkQA[] = [
    {
        id: 1,
        question: "Tell me about a failure you experienced.",
        answer: {
            Context: "In my first college presentation, I underestimated the preparation needed.",
            Action: "I went in without enough practice and relied on memory.",
            Result: "I struggled during delivery, but it taught me the importance of preparation."
        }
    },
    {
        id: 2,
        question: "Describe a mistake you made and what you learned.",
        answer: {
            Context: "During a project, I misunderstood requirements.",
            Action: "I proceeded without clarifying doubts early.",
            Result: "The rework taught me to ask questions upfront."
        }
    },
    {
        id: 3,
        question: "Tell me about a time something didn't go as planned.",
        answer: {
            Context: "In a hackathon, our feature failed during demo.",
            Action: "We tried to fix everything last minute.",
            Result: "I learned to prioritize stability over features."
        }
    },
    {
        id: 4,
        question: "Share a professional mistake you made.",
        answer: {
            Context: "I once submitted work without reviewing it thoroughly.",
            Action: "I assumed it was correct.",
            Result: "The feedback helped me build a habit of self-review."
        }
    },
    {
        id: 5,
        question: "Tell me about a setback you faced.",
        answer: {
            Context: "I didn't clear my first interview.",
            Action: "I focused only on technical answers and ignored communication.",
            Result: "It helped me work on structured speaking."
        }
    },
    {
        id: 6,
        question: "Describe a time you missed a deadline.",
        answer: {
            Context: "I misjudged the time needed for an assignment.",
            Action: "I delayed starting it.",
            Result: "I learned better time estimation."
        }
    },
    {
        id: 7,
        question: "Tell me about a time your plan failed.",
        answer: {
            Context: "Our project approach was too complex.",
            Action: "We stuck with it for too long.",
            Result: "Simplifying earlier would have saved time."
        }
    },
    {
        id: 8,
        question: "Describe a situation where you made the wrong decision.",
        answer: {
            Context: "I chose a tool I wasn't comfortable with.",
            Action: "I didn't test alternatives.",
            Result: "Now I evaluate tools before committing."
        }
    },
    {
        id: 9,
        question: "Tell me about a time you handled failure poorly.",
        answer: {
            Context: "After poor feedback, I felt demotivated.",
            Action: "I initially avoided discussions.",
            Result: "I learned to accept feedback constructively."
        }
    },
    {
        id: 10,
        question: "Share a learning experience from a mistake.",
        answer: {
            Context: "I once overcommitted to tasks.",
            Action: "I said yes to everything.",
            Result: "I now communicate capacity clearly."
        }
    },
    {
        id: 11,
        question: "Tell me about a project that didn't succeed.",
        answer: {
            Context: "A team project failed to meet expectations.",
            Action: "We lacked coordination.",
            Result: "It highlighted the importance of clear roles."
        }
    },
    {
        id: 12,
        question: "Describe a time you overlooked details.",
        answer: {
            Context: "I ignored minor errors in documentation.",
            Action: "I rushed submission.",
            Result: "I learned to double-check critical work."
        }
    },
    {
        id: 13,
        question: "Tell me about a risk that didn't pay off.",
        answer: {
            Context: "I tried implementing advanced features quickly.",
            Action: "I skipped testing.",
            Result: "I learned to balance risk with planning."
        }
    },
    {
        id: 14,
        question: "Describe a time you faced rejection.",
        answer: {
            Context: "My proposal for an event was rejected.",
            Action: "I didn't align it with objectives.",
            Result: "I improved by understanding stakeholder needs."
        }
    },
    {
        id: 15,
        question: "Tell me about a time you disappointed someone.",
        answer: {
            Context: "A teammate expected earlier support.",
            Action: "I delayed communication.",
            Result: "I learned to be proactive."
        }
    },
    {
        id: 16,
        question: "Share a time you miscommunicated.",
        answer: {
            Context: "I assumed instructions were clear.",
            Action: "I didn't confirm understanding.",
            Result: "I now summarize key points."
        }
    },
    {
        id: 17,
        question: "Tell me about a challenge you couldn't solve initially.",
        answer: {
            Context: "A bug persisted for days.",
            Action: "I kept retrying the same approach.",
            Result: "I learned to seek help sooner."
        }
    },
    {
        id: 18,
        question: "Describe a time you didn't meet expectations.",
        answer: {
            Context: "My initial performance was average.",
            Action: "I lacked clarity on expectations.",
            Result: "Feedback helped me align better."
        }
    },
    {
        id: 19,
        question: "Tell me about a mistake under pressure.",
        answer: {
            Context: "During exams, I misread a question.",
            Action: "I rushed answers.",
            Result: "I learned to slow down under pressure."
        }
    },
    {
        id: 20,
        question: "Share a time you handled feedback poorly.",
        answer: {
            Context: "I took criticism personally.",
            Action: "I became defensive initially.",
            Result: "I learned to separate feedback from ego."
        }
    },
    {
        id: 21,
        question: "Tell me about a task you underestimated.",
        answer: {
            Context: "A small assignment turned complex.",
            Action: "I allocated insufficient time.",
            Result: "I learned better estimation."
        }
    },
    {
        id: 22,
        question: "Describe a situation where you lacked preparation.",
        answer: {
            Context: "I attended a discussion without preparation.",
            Action: "I relied on general knowledge.",
            Result: "Preparation improved future participation."
        }
    },
    {
        id: 23,
        question: "Tell me about a mistake you corrected later.",
        answer: {
            Context: "I followed an inefficient process initially.",
            Action: "I didn't question it.",
            Result: "Revising the process improved results."
        }
    },
    {
        id: 24,
        question: "Share a lesson from a failure.",
        answer: {
            Context: "I failed to communicate priorities.",
            Action: "I assumed alignment.",
            Result: "I learned to clarify expectations."
        }
    },
    {
        id: 25,
        question: "Tell me about a time you learned humility.",
        answer: {
            Context: "I assumed I had the best solution.",
            Action: "I ignored suggestions.",
            Result: "Accepting feedback improved outcomes."
        }
    }
];

export const whwFrameworkQuestions: FrameworkQA[] = [
    {
        id: 1,
        question: "Why do you want to join this company?",
        answer: {
            Why: "I'm interested in this company because it focuses on impact-driven solutions.",
            How: "My learning mindset and adaptability align well with such fast-growing environments.",
            What: "I'm looking forward to contributing while continuously developing my skills here."
        }
    },
    {
        id: 2,
        question: "Why should we hire you?",
        answer: {
            Why: "I believe my strengths lie in learning quickly and taking ownership.",
            How: "I consistently apply feedback to improve performance.",
            What: "I aim to add value through reliability, clarity, and consistent effort."
        }
    },
    {
        id: 3,
        question: "Why did you choose this field?",
        answer: {
            Why: "I enjoy solving problems and understanding how systems work.",
            How: "This field allows me to combine logic with real-world applications.",
            What: "I want to build skills that create practical impact."
        }
    },
    {
        id: 4,
        question: "Why are you interested in this role?",
        answer: {
            Why: "This role aligns with my interest in applying my skills meaningfully.",
            How: "It offers exposure to real challenges and learning opportunities.",
            What: "I want to grow while contributing to team goals."
        }
    },
    {
        id: 5,
        question: "Why do you want to work in a startup?",
        answer: {
            Why: "Startups offer fast learning and ownership.",
            How: "I thrive in dynamic environments where responsibility comes early.",
            What: "I want to grow alongside the product and team."
        }
    },
    {
        id: 6,
        question: "Why did you apply for this position?",
        answer: {
            Why: "This position matches my current skill set and growth goals.",
            How: "It allows hands-on experience rather than only theoretical work.",
            What: "I aim to build strong foundational skills through this role."
        }
    },
    {
        id: 7,
        question: "Why do you want to improve your communication skills?",
        answer: {
            Why: "Communication directly impacts confidence and opportunities.",
            How: "Clear expression helps translate ideas into action.",
            What: "I'm actively practicing structured speaking to improve."
        }
    },
    {
        id: 8,
        question: "Why are you interested in leadership roles?",
        answer: {
            Why: "Leadership allows impact beyond individual tasks.",
            How: "Guiding teams helps improve outcomes collectively.",
            What: "I aim to develop leadership through responsibility and experience."
        }
    },
    {
        id: 9,
        question: "Why did you choose this college/course?",
        answer: {
            Why: "The course offered a strong foundation in my field of interest.",
            How: "It provides exposure to both theory and projects.",
            What: "I plan to leverage this learning for practical growth."
        }
    },
    {
        id: 10,
        question: "Why do you want to pursue higher education?",
        answer: {
            Why: "I want deeper understanding and specialization.",
            How: "Advanced learning prepares me for complex challenges.",
            What: "I plan to use this knowledge to solve real problems."
        }
    },
    {
        id: 11,
        question: "Why are you passionate about learning?",
        answer: {
            Why: "Learning helps me stay adaptable.",
            How: "Continuous improvement keeps skills relevant.",
            What: "I actively seek opportunities to learn and apply knowledge."
        }
    },
    {
        id: 12,
        question: "Why do you want to change roles/domains?",
        answer: {
            Why: "I discovered stronger alignment with a different skill set.",
            How: "My experiences clarified where I perform best.",
            What: "I'm transitioning to maximize contribution and growth."
        }
    },
    {
        id: 13,
        question: "Why should we trust you with responsibility?",
        answer: {
            Why: "I value accountability.",
            How: "I take ownership of tasks and communicate progress clearly.",
            What: "I aim to deliver consistently and reliably."
        }
    },
    {
        id: 14,
        question: "Why are you interested in remote/hybrid work?",
        answer: {
            Why: "It promotes focused and flexible productivity.",
            How: "I manage time effectively and stay accountable.",
            What: "I plan to deliver results regardless of work mode."
        }
    },
    {
        id: 15,
        question: "Why do you want to work with our team?",
        answer: {
            Why: "I admire the collaborative culture of your team.",
            How: "Teamwork accelerates learning and innovation.",
            What: "I want to contribute while learning from diverse perspectives."
        }
    },
    {
        id: 16,
        question: "Why do you value feedback?",
        answer: {
            Why: "Feedback highlights improvement areas.",
            How: "It helps refine performance objectively.",
            What: "I actively seek and apply feedback."
        }
    },
    {
        id: 17,
        question: "Why do you want to build a long-term career here?",
        answer: {
            Why: "The company's vision aligns with my goals.",
            How: "Long-term association allows deeper contribution.",
            What: "I aim to grow with the organization."
        }
    },
    {
        id: 18,
        question: "Why are you suitable for this role as a fresher?",
        answer: {
            Why: "Freshers bring adaptability and openness.",
            How: "I quickly learn and apply new concepts.",
            What: "I aim to build value through consistency."
        }
    },
    {
        id: 19,
        question: "Why do you want to work in this industry?",
        answer: {
            Why: "The industry is evolving and impactful.",
            How: "It offers learning and growth opportunities.",
            What: "I want to contribute to meaningful solutions."
        }
    },
    {
        id: 20,
        question: "Why do you want to take on challenges?",
        answer: {
            Why: "Challenges accelerate learning.",
            How: "They reveal strengths and gaps.",
            What: "I intentionally seek growth opportunities."
        }
    },
    {
        id: 21,
        question: "Why is teamwork important to you?",
        answer: {
            Why: "Teamwork improves outcomes.",
            How: "Collaboration combines diverse skills.",
            What: "I aim to be a supportive team member."
        }
    },
    {
        id: 22,
        question: "Why do you believe you'll succeed in this role?",
        answer: {
            Why: "I'm committed to growth.",
            How: "I consistently put in effort and learn from feedback.",
            What: "I aim to deliver value steadily."
        }
    },
    {
        id: 23,
        question: "Why do you start your career with us?",
        answer: {
            Why: "Early career environments shape long-term habits.",
            How: "Your company offers strong learning exposure.",
            What: "I want to build a strong foundation here."
        }
    },
    {
        id: 24,
        question: "Why do you enjoy problem-solving?",
        answer: {
            Why: "Solving problems gives clarity and satisfaction.",
            How: "It encourages analytical thinking.",
            What: "I enjoy applying solutions to real situations."
        }
    },
    {
        id: 25,
        question: "Why are you motivated to improve continuously?",
        answer: {
            Why: "Improvement keeps me relevant and confident.",
            How: "Small improvements compound over time.",
            What: "I commit to regular self-improvement."
        }
    }
];

export const a3FrameworkQuestions: FrameworkQA[] = [
    {
        id: 1,
        question: "What would you do differently if given another chance?",
        answer: {
            Action: "I completed the task independently without involving the team early.",
            Analysis: "This limited feedback and delayed improvements.",
            Adjustment: "Next time, I would share early drafts and iterate collaboratively."
        }
    },
    {
        id: 2,
        question: "How do you reflect on your past performance?",
        answer: {
            Action: "I review outcomes after completing tasks.",
            Analysis: "This helps identify what worked and what didn't.",
            Adjustment: "I apply those learnings in future tasks."
        }
    },
    {
        id: 3,
        question: "Tell me about a time you improved after feedback.",
        answer: {
            Action: "I initially delivered detailed but lengthy explanations.",
            Analysis: "Feedback showed that clarity mattered more than depth.",
            Adjustment: "I now focus on concise, structured responses."
        }
    },
    {
        id: 4,
        question: "How do you handle mistakes?",
        answer: {
            Action: "I acknowledge mistakes openly.",
            Analysis: "Avoiding them delays learning.",
            Adjustment: "I focus on correcting the process, not just the outcome."
        }
    },
    {
        id: 5,
        question: "What lesson did you learn from a recent challenge?",
        answer: {
            Action: "I took on multiple tasks simultaneously.",
            Analysis: "It reduced quality due to divided focus.",
            Adjustment: "I now prioritize and limit parallel tasks."
        }
    },
    {
        id: 6,
        question: "How do you improve your communication?",
        answer: {
            Action: "I practice speaking regularly.",
            Analysis: "Practice alone wasn't enough without feedback.",
            Adjustment: "I now seek structured feedback after practice."
        }
    },
    {
        id: 7,
        question: "Tell me about a habit you refined over time.",
        answer: {
            Action: "I used to delay reviews.",
            Analysis: "Errors increased due to haste.",
            Adjustment: "I added a fixed review step before submission."
        }
    },
    {
        id: 8,
        question: "How do you deal with underperformance?",
        answer: {
            Action: "I initially felt discouraged.",
            Analysis: "Emotional reactions didn't improve results.",
            Adjustment: "I now focus on actionable improvements."
        }
    },
    {
        id: 9,
        question: "What changed your approach to teamwork?",
        answer: {
            Action: "I tried handling everything myself.",
            Analysis: "It limited team efficiency.",
            Adjustment: "I now delegate and trust teammates."
        }
    },
    {
        id: 10,
        question: "How do you ensure continuous improvement?",
        answer: {
            Action: "I set learning goals.",
            Analysis: "Untracked goals fade quickly.",
            Adjustment: "I review progress weekly."
        }
    },
    {
        id: 11,
        question: "Tell me about a time you changed your mindset.",
        answer: {
            Action: "I avoided challenging tasks.",
            Analysis: "Comfort slowed growth.",
            Adjustment: "I now take on tasks slightly beyond comfort."
        }
    },
    {
        id: 12,
        question: "How do you respond to criticism?",
        answer: {
            Action: "I initially defended my approach.",
            Analysis: "This blocked learning.",
            Adjustment: "I now listen fully before responding."
        }
    },
    {
        id: 13,
        question: "What improvement did you make after a failure?",
        answer: {
            Action: "I focused too much on features.",
            Analysis: "Stability was compromised.",
            Adjustment: "I now prioritize core functionality."
        }
    },
    {
        id: 14,
        question: "How do you refine your decision-making?",
        answer: {
            Action: "I analyzed too many variables.",
            Analysis: "Overthinking caused delays.",
            Adjustment: "I now limit factors to key criteria."
        }
    },
    {
        id: 15,
        question: "Tell me about a process you optimized.",
        answer: {
            Action: "I followed an inefficient workflow.",
            Analysis: "It consumed unnecessary time.",
            Adjustment: "I simplified steps and removed redundancies."
        }
    },
    {
        id: 16,
        question: "How do you handle repeated mistakes?",
        answer: {
            Action: "I noticed patterns in errors.",
            Analysis: "They stemmed from weak systems.",
            Adjustment: "I fixed the system, not just the mistake."
        }
    },
    {
        id: 17,
        question: "What changed after you received consistent feedback?",
        answer: {
            Action: "I received feedback on clarity.",
            Analysis: "Improvement required consistency.",
            Adjustment: "I practiced structured speaking daily."
        }
    },
    {
        id: 18,
        question: "How do you reflect after completing a project?",
        answer: {
            Action: "I review outcomes and team feedback.",
            Analysis: "This highlights blind spots.",
            Adjustment: "I document learnings for future use."
        }
    },
    {
        id: 19,
        question: "Tell me about a time you adjusted your goals.",
        answer: {
            Action: "I set overly ambitious targets.",
            Analysis: "They caused burnout.",
            Adjustment: "I now set realistic, progressive goals."
        }
    },
    {
        id: 20,
        question: "How do you improve under pressure?",
        answer: {
            Action: "I used to rush decisions.",
            Analysis: "Speed reduced accuracy.",
            Adjustment: "I now pause briefly before acting."
        }
    },
    {
        id: 21,
        question: "What reflection improved your leadership style?",
        answer: {
            Action: "I micromanaged tasks.",
            Analysis: "It reduced team morale.",
            Adjustment: "I shifted to outcome-based guidance."
        }
    },
    {
        id: 22,
        question: "How do you turn feedback into action?",
        answer: {
            Action: "I noted feedback mentally.",
            Analysis: "Without action, feedback fades.",
            Adjustment: "I convert feedback into small tasks."
        }
    },
    {
        id: 23,
        question: "What did you learn about yourself recently?",
        answer: {
            Action: "I realized I avoid asking for help.",
            Analysis: "This slowed progress.",
            Adjustment: "I now seek help proactively."
        }
    },
    {
        id: 24,
        question: "How do you ensure lessons are retained?",
        answer: {
            Action: "I relied on memory.",
            Analysis: "Lessons were forgotten over time.",
            Adjustment: "I document learnings systematically."
        }
    },
    {
        id: 25,
        question: "What mindset adjustment helped you most?",
        answer: {
            Action: "I chased perfection.",
            Analysis: "It delayed execution.",
            Adjustment: "I now focus on progress over perfection."
        }
    }
];

export const prepFrameworkQuestions: FrameworkQA[] = [
    {
        id: 1,
        question: "Do you think communication skills are important for freshers?",
        answer: {
            P: "Yes, communication skills are extremely important for freshers.",
            R: "Because even strong technical knowledge needs clear expression to be noticed.",
            E: "For example, many students know answers in interviews but fail to explain their thinking clearly.",
            ConcludingPoint: "So communication becomes the bridge between knowledge and opportunity."
        }
    },
    {
        id: 2,
        question: "What is more important: skills or attitude?",
        answer: {
            P: "I believe attitude is more important in the long run.",
            R: "Skills can be learned, but attitude determines how someone learns and adapts.",
            E: "I've seen teammates improve quickly because they were open to feedback.",
            ConcludingPoint: "So attitude creates the foundation for sustainable growth."
        }
    },
    {
        id: 3,
        question: "Should students focus more on grades or practical experience?",
        answer: {
            P: "Students should focus on balancing both, with slightly more emphasis on experience.",
            R: "Practical exposure prepares students for real-world challenges.",
            E: "For instance, projects often teach problem-solving better than theory alone.",
            ConcludingPoint: "That's why experience complements academic performance."
        }
    },
    {
        id: 4,
        question: "Is failure necessary for success?",
        answer: {
            P: "Yes, failure plays an important role in success.",
            R: "It highlights gaps that success often hides.",
            E: "After failing in my first presentation, I improved by practicing more.",
            ConcludingPoint: "So failure becomes a learning tool, not a setback."
        }
    },
    {
        id: 5,
        question: "Do you think teamwork is better than working alone?",
        answer: {
            P: "I believe teamwork usually leads to better outcomes.",
            R: "Different perspectives improve problem-solving.",
            E: "In group projects, combining skills often leads to stronger results.",
            ConcludingPoint: "Hence, teamwork encourages learning and efficiency."
        }
    },
    {
        id: 6,
        question: "Is confidence more important than knowledge?",
        answer: {
            P: "Confidence and knowledge should go together, but confidence gives visibility.",
            R: "Without confidence, knowledge often remains unnoticed.",
            E: "I've seen confident speakers lead discussions even with average content.",
            ConcludingPoint: "That's why confidence amplifies knowledge."
        }
    },
    {
        id: 7,
        question: "Should students start preparing for interviews early?",
        answer: {
            P: "Yes, early preparation is beneficial.",
            R: "It reduces pressure and builds comfort over time.",
            E: "Students who practice regularly feel less anxious later.",
            ConcludingPoint: "So starting early leads to better performance."
        }
    },
    {
        id: 8,
        question: "Do you prefer working in a team or independently?",
        answer: {
            P: "I prefer a mix of both, depending on the task.",
            R: "Some tasks need focus, while others benefit from collaboration.",
            E: "Individual preparation followed by team discussion works best for me.",
            ConcludingPoint: "So flexibility is key."
        }
    },
    {
        id: 9,
        question: "Is online learning effective?",
        answer: {
            P: "Online learning can be effective if used correctly.",
            R: "It offers flexibility and access to resources.",
            E: "Short, focused online sessions helped me learn faster.",
            ConcludingPoint: "So effectiveness depends on how it's used."
        }
    },
    {
        id: 10,
        question: "Do you think leadership can be learned?",
        answer: {
            P: "Yes, leadership can definitely be learned.",
            R: "It develops through practice and experience.",
            E: "Taking small responsibilities helped me improve leadership skills.",
            ConcludingPoint: "So leadership grows with exposure."
        }
    },
    {
        id: 11,
        question: "Is multitasking productive?",
        answer: {
            P: "Multitasking is often less productive than focused work.",
            R: "Divided attention reduces quality.",
            E: "When I focused on one task at a time, efficiency improved.",
            ConcludingPoint: "Hence, focus leads to better output."
        }
    },
    {
        id: 12,
        question: "Should students take part in extracurricular activities?",
        answer: {
            P: "Yes, extracurricular activities are valuable.",
            R: "They develop soft skills beyond academics.",
            E: "Events and clubs improved my teamwork and confidence.",
            ConcludingPoint: "So they contribute to overall development."
        }
    },
    {
        id: 13,
        question: "Is time management a critical skill?",
        answer: {
            P: "Time management is extremely important.",
            R: "It helps balance multiple responsibilities.",
            E: "Planning my day improved productivity during exams.",
            ConcludingPoint: "So managing time leads to consistency."
        }
    },
    {
        id: 14,
        question: "Do you think competition is healthy?",
        answer: {
            P: "Healthy competition can be motivating.",
            R: "It pushes individuals to improve.",
            E: "Friendly competition in class encouraged better preparation.",
            ConcludingPoint: "So competition works when it stays positive."
        }
    },
    {
        id: 15,
        question: "Is adaptability important in today's workplace?",
        answer: {
            P: "Yes, adaptability is crucial.",
            R: "Change is constant in modern workplaces.",
            E: "Adapting to new tools helped me perform better in projects.",
            ConcludingPoint: "So adaptability ensures relevance."
        }
    },
    {
        id: 16,
        question: "Should freshers focus on specialization early?",
        answer: {
            P: "Exploring before specializing is better.",
            R: "Early exposure helps make informed choices.",
            E: "Trying different roles helped me identify interests.",
            ConcludingPoint: "So exploration builds clarity."
        }
    },
    {
        id: 17,
        question: "Is self-discipline important for success?",
        answer: {
            P: "Self-discipline plays a major role in success.",
            R: "Consistency comes from discipline.",
            E: "Daily practice improved my communication skills.",
            ConcludingPoint: "That's why discipline sustains progress."
        }
    },
    {
        id: 18,
        question: "Should mistakes be openly discussed in teams?",
        answer: {
            P: "Yes, mistakes should be discussed constructively.",
            R: "It prevents repetition and improves trust.",
            E: "Open discussions in our team reduced future errors.",
            ConcludingPoint: "So transparency strengthens teamwork."
        }
    },
    {
        id: 19,
        question: "Is creativity important in technical roles?",
        answer: {
            P: "Creativity is important even in technical roles.",
            R: "It improves problem-solving.",
            E: "Creative approaches helped optimize solutions in projects.",
            ConcludingPoint: "So creativity adds value."
        }
    },
    {
        id: 20,
        question: "Do you think communication can be trained?",
        answer: {
            P: "Yes, communication is a trainable skill.",
            R: "Structured practice improves clarity.",
            E: "Regular mock sessions improved my confidence.",
            ConcludingPoint: "So communication improves with effort."
        }
    },
    {
        id: 21,
        question: "Is feedback necessary for growth?",
        answer: {
            P: "Feedback is essential for improvement.",
            R: "It shows blind spots.",
            E: "Feedback helped me refine my speaking style.",
            ConcludingPoint: "So growth accelerates with feedback."
        }
    },
    {
        id: 22,
        question: "Should students take risks?",
        answer: {
            P: "Taking calculated risks is beneficial.",
            R: "It leads to learning and growth.",
            E: "Participating in new activities improved my exposure.",
            ConcludingPoint: "So risks build experience."
        }
    },
    {
        id: 23,
        question: "Is consistency more important than intensity?",
        answer: {
            P: "Consistency matters more in the long term.",
            R: "Small efforts compound over time.",
            E: "Daily short practice worked better than rare long sessions.",
            ConcludingPoint: "So consistency drives results."
        }
    },
    {
        id: 24,
        question: "Is listening an important communication skill?",
        answer: {
            P: "Listening is as important as speaking.",
            R: "It improves understanding.",
            E: "Active listening reduced misunderstandings in group work.",
            ConcludingPoint: "So communication is two-way."
        }
    },
    {
        id: 25,
        question: "Do you think confidence comes from preparation?",
        answer: {
            P: "Yes, preparation builds confidence.",
            R: "Knowing content reduces uncertainty.",
            E: "Mock interviews increased my confidence.",
            ConcludingPoint: "So confidence is a by-product of preparation."
        }
    }
];