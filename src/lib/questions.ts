export type Question = {
  id: number;
  text: string;
  options: string[];
  correctAnswer: number;        // index of correct option (0-3)
  difficulty: 'Easy' | 'Intermediate' | 'Advanced';
  score: number;                // 1-5 points
};

export const questionBank: Question[] = [
{
  id: 1,
  text: "How often do you inspect your vehicle before starting a trip?",
  options: [
    "Before every trip",
    "Only on long trips",
    "Occasionally",
    "Rarely"
  ],
  correctAnswer: 0,
  difficulty: "Easy",
  score: 2
},
{
  id: 2,
  text: "A passenger complains that a driver was rude during a journey. What is the best response?",
  options: [
    "Listen carefully, investigate the complaint, and take appropriate action",
    "Ignore the complaint",
    "Defend the driver immediately",
    "Tell the passenger to leave"
  ],
  correctAnswer: 0,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 3,
  text: "What should a driver do when feeling tired during a long-distance trip?",
  options: [
    "Stop safely and rest before continuing",
    "Drink water and keep driving",
    "Increase speed to arrive faster",
    "Ignore the fatigue"
  ],
  correctAnswer: 0,
  difficulty: "Easy",
  score: 2
},
{
  id: 4,
  text: "How would you handle a situation where a passenger misses a scheduled departure by a few minutes?",
  options: [
    "Follow company policy while treating the passenger respectfully",
    "Argue with the passenger",
    "Ignore the passenger",
    "Cancel all trips"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 5,
  text: "How often should vehicle maintenance records be updated?",
  options: [
    "After every maintenance activity",
    "Once a year",
    "Only when requested",
    "Never"
  ],
  correctAnswer: 0,
  difficulty: "Easy",
  score: 2
},
{
  id: 6,
  text: "A customer becomes angry because of a delay caused by traffic. What should staff do first?",
  options: [
    "Acknowledge the frustration and provide clear information",
    "Ignore the customer",
    "Argue with the customer",
    "Blame the driver"
  ],
  correctAnswer: 0,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 7,
  text: "How often do you verify passenger manifests before departure?",
  options: [
    "Every trip",
    "Once a week",
    "Occasionally",
    "Never"
  ],
  correctAnswer: 0,
  difficulty: "Easy",
  score: 2
},
{
  id: 8,
  text: "What is the safest action when driving in heavy rain with poor visibility?",
  options: [
    "Reduce speed and increase following distance",
    "Maintain normal speed",
    "Overtake frequently",
    "Turn off headlights"
  ],
  correctAnswer: 0,
  difficulty: "Easy",
  score: 2
},
{
  id: 9,
  text: "A driver reports that the brakes feel unusual before departure. What should happen?",
  options: [
    "The vehicle should be inspected immediately",
    "Continue the trip",
    "Ignore the concern",
    "Ask passengers for their opinion"
  ],
  correctAnswer: 0,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 10,
  text: "What would you do if a passenger left an important item in your vehicle?",
  options: [
    "Report and secure the item according to company policy",
    "Take it home",
    "Ignore it",
    "Throw it away"
  ],
  correctAnswer: 0,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 11,
  text: "A route that normally takes 4 hours suddenly experiences daily delays. What should be your first action as Terminal Manager?",
  options: [
    "Suspend all trips permanently",
    "Investigate the cause using trip data and driver reports",
    "Replace all drivers immediately",
    "Increase ticket prices"
  ],
  correctAnswer: 1,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 12,
  text: "How often should driver performance be reviewed to maintain service quality?",
  options: [
    "Only when complaints occur",
    "Every few years",
    "Regularly using operational data and feedback",
    "Never"
  ],
  correctAnswer: 2,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 13,
  text: "A vehicle breaks down during peak travel hours. What is the most effective response?",
  options: [
    "Activate contingency plans and communicate with affected passengers",
    "Wait until passengers complain",
    "Cancel every trip for the day",
    "Ignore the issue"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 14,
  text: "Which factor is most important when assigning drivers to long-distance routes?",
  options: [
    "Personal friendships",
    "Driver experience, fitness, and safety record",
    "Age only",
    "Salary level"
  ],
  correctAnswer: 1,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 15,
  text: "How would you handle repeated customer complaints about departure delays?",
  options: [
    "Blame traffic",
    "Ignore the complaints",
    "Analyze schedules and implement corrective measures",
    "Reduce customer service staff"
  ],
  correctAnswer: 2,
  difficulty: "Advanced",
  score: 4
},
{
  id: 16,
  text: "What is the best indicator that a terminal is operating efficiently?",
  options: [
    "Consistent departures, customer satisfaction, and minimal downtime",
    "Expensive office furniture",
    "Large parking lots",
    "High electricity consumption"
  ],
  correctAnswer: 0,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 17,
  text: "A driver reports feeling unwell shortly before departure. What should a Terminal Manager do?",
  options: [
    "Advise the driver to continue",
    "Find a qualified replacement and prioritize safety",
    "Ignore the report",
    "Allow passengers to decide"
  ],
  correctAnswer: 1,
  difficulty: "Advanced",
  score: 4
},
{
  id: 18,
  text: "How often should emergency response procedures be reviewed with staff?",
  options: [
    "Only after an incident",
    "Never",
    "Regularly through drills and training sessions",
    "Once every ten years"
  ],
  correctAnswer: 2,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 19,
  text: "Passenger demand increases significantly during holidays. What should be your priority?",
  options: [
    "Reduce trips",
    "Increase operational capacity while maintaining safety standards",
    "Close bookings",
    "Reduce staff"
  ],
  correctAnswer: 1,
  difficulty: "Advanced",
  score: 4
},
{
  id: 20,
  text: "What is the best approach to resolving conflict between two staff members at the terminal?",
  options: [
    "Ignore the situation",
    "Take sides immediately",
    "Facilitate a fair discussion and seek resolution",
    "Suspend both employees automatically"
  ],
  correctAnswer: 2,
  difficulty: "Advanced",
  score: 4
},
{
  id: 21,
  text: "A driver consistently arrives on time but receives frequent complaints about attitude. What should be your priority as Terminal Manager?",
  options: [
    "Ignore the complaints because the driver is punctual",
    "Provide coaching and investigate the feedback while monitoring improvement",
    "Suspend the driver immediately",
    "Transfer the driver without discussion"
  ],
  correctAnswer: 1,
  difficulty: "Advanced",
  score: 4
},
{
  id: 22,
  text: "How often should terminal operations be reviewed to identify efficiency improvements?",
  options: [
    "Only when problems occur",
    "Every five years",
    "Regularly using operational reports and performance data",
    "Never"
  ],
  correctAnswer: 2,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 23,
  text: "A vehicle scheduled for departure has a minor fault that does not immediately affect movement. What is the best course of action?",
  options: [
    "Inspect and assess the risk before allowing operations",
    "Allow the trip without inspection",
    "Ignore the issue",
    "Ask passengers if they are comfortable traveling"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 24,
  text: "What is the most effective way to reduce passenger complaints?",
  options: [
    "Increase advertising",
    "Provide consistent service, communication, and timely issue resolution",
    "Reduce ticket availability",
    "Limit customer feedback channels"
  ],
  correctAnswer: 1,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 25,
  text: "A route generates strong revenue but has a growing number of safety incidents. What should take priority?",
  options: [
    "Expanding the route immediately",
    "Increasing ticket prices",
    "Addressing safety concerns before pursuing growth",
    "Reducing maintenance costs"
  ],
  correctAnswer: 2,
  difficulty: "Advanced",
  score: 5
},
{
  id: 26,
  text: "How should a Terminal Manager respond when staff morale begins to decline?",
  options: [
    "Identify concerns, engage staff, and implement practical improvements",
    "Ignore the issue",
    "Reduce communication with employees",
    "Increase workload to improve productivity"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 27,
  text: "What is the primary purpose of monitoring vehicle turnaround time?",
  options: [
    "To determine fuel prices",
    "To measure operational efficiency and resource utilization",
    "To monitor passenger conversations",
    "To reduce driver salaries"
  ],
  correctAnswer: 1,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 28,
  text: "How often should safety procedures be communicated to operational staff?",
  options: [
    "Only during recruitment",
    "Only after accidents",
    "Continuously through meetings, reminders, and training",
    "Once every three years"
  ],
  correctAnswer: 2,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 29,
  text: "A customer reports that a staff member was unhelpful. What should happen first?",
  options: [
    "Gather facts from all parties before making a decision",
    "Suspend the staff member immediately",
    "Dismiss the complaint",
    "Publicly criticize the employee"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 30,
  text: "Which action best improves long-term terminal performance?",
  options: [
    "Making decisions without data",
    "Investing in staff development, maintenance, and operational improvements",
    "Reducing training opportunities",
    "Ignoring customer feedback"
  ],
  correctAnswer: 1,
  difficulty: "Advanced",
  score: 4
},
{
  id: 31,
  text: "Passenger volume has increased by 30% over the last three months, causing longer waiting times. What should be your first action?",
  options: [
    "Analyze operational data and identify capacity bottlenecks",
    "Increase ticket prices immediately",
    "Reduce the number of trips",
    "Ignore the trend until complaints increase"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 32,
  text: "A highly experienced driver repeatedly ignores reporting procedures. How should you respond?",
  options: [
    "Ignore it because of the driver's experience",
    "Address the issue professionally and enforce compliance standards",
    "Publicly embarrass the driver",
    "Remove the driver without investigation"
  ],
  correctAnswer: 1,
  difficulty: "Advanced",
  score: 4
},
{
  id: 33,
  text: "How often should operational risks be assessed and reviewed?",
  options: [
    "Only after incidents occur",
    "Once every five years",
    "Regularly as part of ongoing operations management",
    "Only during audits"
  ],
  correctAnswer: 2,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 34,
  text: "A major traffic disruption affects multiple scheduled departures. What is the most important immediate response?",
  options: [
    "Provide timely updates and coordinate alternative solutions",
    "Turn off customer communication channels",
    "Wait until passengers ask questions",
    "Blame local authorities"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 5
},
{
  id: 35,
  text: "What is the best indicator of strong customer service performance?",
  options: [
    "Large office space",
    "Positive customer feedback and efficient issue resolution",
    "Number of managers on duty",
    "Length of staff meetings"
  ],
  correctAnswer: 1,
  difficulty: "Intermediate",
  score: 3
},
{
  id: 36,
  text: "A staff member reports a safety concern that may delay departures. What should you do?",
  options: [
    "Ignore the concern to maintain schedules",
    "Wait for another employee to report it",
    "Investigate the concern and prioritize safety",
    "Ask passengers to decide"
  ],
  correctAnswer: 2,
  difficulty: "Advanced",
  score: 5
},
{
  id: 37,
  text: "What is the most effective way to build accountability among terminal staff?",
  options: [
    "Set clear expectations and monitor performance fairly",
    "Avoid performance discussions",
    "Punish every mistake immediately",
    "Allow staff to create their own rules"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 4
},
{
  id: 38,
  text: "A customer becomes aggressive after missing a departure. How should staff respond?",
  options: [
    "Respond aggressively",
    "Remain calm, de-escalate the situation, and explain available options",
    "Ignore the customer",
    "Remove the customer without communication"
  ],
  correctAnswer: 1,
  difficulty: "Advanced",
  score: 4
},
{
  id: 39,
  text: "Which approach is most effective for improving operational efficiency across a terminal?",
  options: [
    "Making decisions based on assumptions",
    "Reducing communication between departments",
    "Using performance data to identify and solve recurring issues",
    "Avoiding process reviews"
  ],
  correctAnswer: 2,
  difficulty: "Advanced",
  score: 4
},
{
  id: 40,
  text: "During a holiday period, demand exceeds available seats on several routes. What should be your priority?",
  options: [
    "Optimize resources and maintain safe, reliable service",
    "Overload vehicles to meet demand",
    "Accept bookings without capacity checks",
    "Reduce customer communication"
  ],
  correctAnswer: 0,
  difficulty: "Advanced",
  score: 5
}
];