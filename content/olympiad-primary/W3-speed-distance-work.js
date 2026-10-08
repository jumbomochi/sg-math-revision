H2.addTopic({
  id: "W3",
  title: "Speed, Distance and Work",
  summary: String.raw`Use closing speeds for meeting and catching up, total distance over total time for average speed, track and train lengths for laps and crossings, and fractions of a job per hour for work and pipes.`,
  concepts: [
    {
      title: String.raw`Moving towards each other: add the speeds`,
      body: String.raw`When two things move **towards each other**, the gap between them shrinks by the **sum of their speeds** every hour (or minute).

$$\text{time to meet} = \frac{\text{distance apart}}{\text{sum of speeds}}$$

*Example.* Two cyclists are $36$ km apart and ride towards each other at $10$ km/h and $8$ km/h. The gap closes by $18$ km each hour, so they meet after $2$ hours, $20$ km from the first cyclist's start.

Each person's distance is **their speed × the same time**, so the distances are in the same ratio as the speeds.`,
      figure: {
        type: "plot",
        x: [-1, 13],
        y: [-2.3, 2.2],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [12, 0], tone: "ink" },
          { from: [0.2, 0.8], to: [2.8, 0.8], tone: "accent", arrow: true, label: "10 km/h", pos: "n", style: "plain" },
          { from: [11.8, 0.8], to: [9.2, 0.8], tone: "good", arrow: true, label: "8 km/h", pos: "n", style: "plain" },
          { from: [0, -1.1], to: [12, -1.1], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "36 km", pos: "s", style: "plain" },
        ],
        points: [
          { x: 0, y: 0, label: "A", pos: "w" },
          { x: 12, y: 0, label: "B", pos: "e" },
          { x: 6.667, y: 0, label: "meet", pos: "n" },
        ],
        caption: String.raw`They close the gap at $10 + 8 = 18$ km/h.`,
        alt: "A straight road from A to B, 36 km long. One cyclist leaves A at 10 km/h and one leaves B at 8 km/h, towards each other. They meet at a point closer to B.",
      },
    },
    {
      title: String.raw`Catching up: subtract the speeds`,
      body: String.raw`When the faster one is **behind** and both go the **same way**, the gap shrinks by the **difference of the speeds**.

$$\text{time to catch up} = \frac{\text{head start distance}}{\text{difference of speeds}}$$

A head start in **time** must first be turned into a head start in **distance**: speed × time.

*Example.* Lee is $6$ km ahead, walking at $5$ km/h. Ming follows at $8$ km/h. The gap closes by $3$ km each hour, so Ming catches Lee after $2$ hours.`,
      figure: {
        type: "plot",
        x: [-2.5, 18.5],
        y: [-1.6, 4],
        equal: true,
        axes: false,
        segments: [
          { from: [0, 0], to: [17.5, 0], tone: "ink" },
          { from: [0.3, 0.9], to: [3.6, 0.9], tone: "accent", arrow: true, label: "8 km/h", pos: "n", style: "plain" },
          { from: [6.3, 0.9], to: [8.6, 0.9], tone: "good", arrow: true, label: "5 km/h", pos: "n", style: "plain" },
          { from: [0, 3], to: [6, 3], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "6 km ahead", pos: "n", style: "plain" },
        ],
        points: [
          { x: 0, y: 0, label: "Ming", pos: "s" },
          { x: 6, y: 0, label: "Lee", pos: "s" },
          { x: 16, y: 0, label: "caught here", pos: "s" },
        ],
        caption: String.raw`Same direction: the gap closes at $8 - 5 = 3$ km/h.`,
        alt: "A straight road. Ming starts at the left at 8 km/h. Lee starts 6 km ahead at 5 km/h, going the same way. Further along the road is the point where Ming catches Lee.",
      },
    },
    {
      title: String.raw`Average speed is not the average of the speeds`,
      body: String.raw`$$\text{average speed} = \frac{\text{total distance}}{\text{total time}}$$

Find each part's **time** first, then add.

*Example.* A car goes $60$ km at $30$ km/h ($2$ h) and comes back at $60$ km/h ($1$ h). Average speed $= 120 \div 3 = 40$ km/h, **not** $45$ km/h.

The slower part takes **longer**, so it counts more. On a round trip the average is always **below** the middle of the two speeds. If the distance is not given, choose an easy one (a number both speeds divide into).`,
    },
    {
      title: String.raw`Circular tracks`,
      body: String.raw`Two runners start together on a circular track.

- **Opposite directions**: they meet each time they cover **one lap together**. Time between meetings $=$ lap $\div$ (sum of speeds).
- **Same direction**: the faster one gains **one full lap** to meet the slower one again. Time $=$ lap $\div$ (difference of speeds).

*Example.* A $240$ m track, speeds $5$ m/s and $3$ m/s. Opposite directions: they meet every $240 \div 8 = 30$ s. Same direction: every $240 \div 2 = 120$ s.

For three runners to be together again, **every pair** must have met, so look for a common multiple of the pair times.`,
      figure: {
        type: "plot",
        x: [-4.6, 4.6],
        y: [-3, 2.4],
        equal: true,
        axes: false,
        circles: [{ c: [0, 0], r: 2, tone: "ink" }],
        curves: [
          { param: "t => [2.45*Math.cos(t), 2.45*Math.sin(t)]", t: [-1.5708, -0.3708], tone: "accent" },
          { param: "t => [1.55*Math.cos(t), 1.55*Math.sin(t)]", t: [-2.7708, -1.5708], tone: "good" },
        ],
        segments: [
          { from: [2.283, -0.888], to: [2.374, -0.655], tone: "accent", arrow: true },
          { from: [-1.445, -0.562], to: [-1.535, -0.329], tone: "good", arrow: true },
        ],
        points: [{ x: 0, y: -2, label: "S", pos: "sw" }],
        labels: [
          { x: 2.1, y: -2.1, text: "5 m/s", pos: "se", tone: "accent" },
          { x: -0.45, y: -0.95, text: "3 m/s", pos: "c", tone: "good" },
          { x: 0, y: 0.5, text: "240 m track", pos: "c", style: "small" },
        ],
        caption: String.raw`Running in opposite directions from $S$, together they cover one lap between meetings.`,
        alt: "A circular track with start S at the bottom. One runner goes anticlockwise at 5 m/s and the other clockwise at 3 m/s.",
      },
    },
    {
      title: String.raw`Trains have length`,
      body: String.raw`Follow the **front** of the train.

- Passing a **pole** or a person standing still: the front travels **one train length**.
- Crossing a **bridge** or tunnel completely (front enters to rear leaves): the front travels **bridge + train**.
- Two trains passing each other: the distance is the **sum of both lengths**. Use the sum of speeds if they go towards each other, and the difference if one overtakes the other.

*Example.* A $120$ m train crosses a $360$ m bridge at $16$ m/s. The front travels $360 + 120 = 480$ m, which takes $30$ s.`,
      figure: {
        type: "plot",
        x: [0, 17.5],
        y: [-1.6, 3.2],
        equal: true,
        axes: false,
        polygons: [
          { points: [[4, -0.45], [13, -0.45], [13, 0], [4, 0]], fill: true, tone: "muted" },
          { points: [[1, 0.15], [4, 0.15], [4, 1], [1, 1]], fill: true, tone: "accent" },
          { points: [[13, 0.15], [16, 0.15], [16, 1], [13, 1]], dashed: true, tone: "accent" },
        ],
        segments: [
          { from: [0.3, 0], to: [4, 0], tone: "ink", thin: true },
          { from: [13, 0], to: [17.2, 0], tone: "ink", thin: true },
          { from: [4, 1.8], to: [16, 1.8], tone: "accent", thin: true, arrow: true, label: "front travels 360 + 120 = 480 m", pos: "n", style: "plain" },
        ],
        labels: [
          { x: 8.5, y: -0.45, text: "bridge 360 m", pos: "s", style: "small" },
          { x: 2.5, y: 0.575, text: "train", pos: "c", style: "small" },
          { x: 14.5, y: 0.575, text: "train", pos: "c", style: "small" },
        ],
        caption: String.raw`Start: the front reaches the bridge. End: the rear leaves it.`,
        alt: "A 120 m train with its front at the start of a 360 m bridge, and the same train, dashed, with its rear at the end of the bridge. An arrow shows the front travels 480 m.",
      },
    },
    {
      title: String.raw`Work rates: fraction of the job per hour`,
      body: String.raw`If someone takes $4$ hours to do a job, they do $\frac{1}{4}$ of the job **each hour**. When people work together, **add their fractions**.

*Example.* A takes $4$ hours and B takes $12$ hours. Together they do $\frac{1}{4} + \frac{1}{12} = \frac{1}{3}$ of the job per hour, so they need $3$ hours.

*Units trick:* pretend the job has $12$ parts (a common multiple of $4$ and $12$). A does $3$ parts per hour, B does $1$, together $4$ parts per hour: $12 \div 4 = 3$ hours.

The time together is **not** the average of the two times. It is always shorter than the faster worker's time.`,
    },
    {
      title: String.raw`Pipes: filling adds, draining takes away`,
      body: String.raw`Treat pipes like workers. A pipe that fills adds its fraction of the tank each minute; a drain or leak **takes away** its fraction.

*Example.* A tap fills a tank in $3$ hours and a drain empties a full tank in $6$ hours. With both open, each hour the tank gains $\frac{1}{3} - \frac{1}{6} = \frac{1}{6}$, so it fills in $6$ hours.

If the pipes are opened at **different times**, work out how much is filled in the first stage, then fill the rest at the new rate.`,
    },
  ],
  archetypes: [
    {
      id: "W3-meeting",
      name: String.raw`Moving towards each other`,
      tests: String.raw`Two people or vehicles start at the two ends of a road and move towards each other. Recognise it by "from opposite ends … towards each other … when (or where) do they meet?", including a second meeting after turning back.`,
      questions: [
        {
          stem: String.raw`Two towns are $270$ km apart. At the same time, a car leaves each town and the cars drive towards each other. One car travels at $50$ km/h and the other at $40$ km/h. After how many hours do they meet?`,
          difficulty: 1,
          answer: String.raw`3 hours`,
        },
        {
          stem: String.raw`The diagram shows a straight path $1.8$ km long. Ali and Bala start at opposite ends at the same time and walk towards each other. Ali walks at $70$ m per minute and Bala walks at $50$ m per minute. How far from Ali's starting point do they meet?`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-4, 22],
            y: [-2.6, 2.2],
            equal: true,
            axes: false,
            segments: [
              { from: [0, 0], to: [18, 0], tone: "ink" },
              { from: [0.3, 0.8], to: [3.8, 0.8], tone: "accent", arrow: true, label: "70 m/min", pos: "n", style: "plain" },
              { from: [17.7, 0.8], to: [14.2, 0.8], tone: "good", arrow: true, label: "50 m/min", pos: "n", style: "plain" },
              { from: [0, -1.2], to: [18, -1.2], tone: "ink", thin: true, arrow: true, arrowStart: true, label: "1.8 km", pos: "s", style: "plain" },
            ],
            points: [
              { x: 0, y: 0, label: "Ali", pos: "w" },
              { x: 18, y: 0, label: "Bala", pos: "e" },
            ],
            alt: "A straight path 1.8 km long. Ali starts at the left end walking right at 70 m per minute; Bala starts at the right end walking left at 50 m per minute.",
          },
          choices: [String.raw`(A) $750$ m`, String.raw`(B) $900$ m`, String.raw`(C) $1050$ m`, String.raw`(D) $1260$ m`],
          answer: String.raw`(C) $1050$ m`,
        },
        {
          stem: String.raw`Xavier and Yasmin start at the same time from the two ends $X$ and $Y$ of a straight road and walk towards each other, each at a steady speed. They first meet $400$ m from $X$. They keep walking, and each turns back at once on reaching the far end. They meet for the second time $300$ m from $Y$. How long is the road?`,
          difficulty: 3,
          answer: String.raw`900 m`,
        },
      ],
    },
    {
      id: "W3-catching-up",
      name: String.raw`Catching up`,
      tests: String.raw`Two people go the same way from the same place, the slower one starting earlier or further ahead. Recognise it by "… leaves later … at a faster speed. When does she catch up?"`,
      questions: [
        {
          stem: String.raw`Ben leaves home and walks at $4$ km/h. One hour later his sister leaves home and cycles after him along the same road at $12$ km/h. How long does she take to catch up with him?`,
          difficulty: 1,
          answer: String.raw`30 minutes`,
        },
        {
          stem: String.raw`A bus leaves a depot at 8:00 am and travels at $48$ km/h. A car leaves the same depot at 8:30 am and travels along the same road at $72$ km/h. At what time does the car catch up with the bus?`,
          difficulty: 2,
          choices: [String.raw`(A) 9:00 am`, String.raw`(B) 9:30 am`, String.raw`(C) 10:00 am`, String.raw`(D) 10:30 am`],
          answer: String.raw`(B) 9:30 am`,
        },
        {
          stem: String.raw`Ann, Bob and Cara set off from the same place along the same road. Ann leaves at 7:00 am and walks at $6$ km/h. Bob leaves at 7:20 am and jogs at $8$ km/h. Cara leaves at 7:40 am and cycles at a steady speed. She catches up with Ann and Bob at exactly the same moment. What is Cara's speed?`,
          difficulty: 3,
          answer: String.raw`12 km/h`,
        },
      ],
    },
    {
      id: "W3-average-speed",
      name: String.raw`Average speed and round trips`,
      tests: String.raw`A journey in parts at different speeds, often there and back. Recognise it by "average speed for the whole journey". Use total distance ÷ total time, never the average of the speeds.`,
      questions: [
        {
          stem: String.raw`Amy walks $3$ km in $40$ minutes. Then she takes a bus for $17$ km, which takes $20$ minutes. What is her average speed for the whole journey, in km/h?`,
          difficulty: 1,
          answer: String.raw`20 km/h`,
        },
        {
          stem: String.raw`Hui Min walks up a hill at $3$ km/h and comes back down the same path at $6$ km/h. What is her average speed for the whole trip?`,
          difficulty: 2,
          choices: [String.raw`(A) $4$ km/h`, String.raw`(B) $4.5$ km/h`, String.raw`(C) $5$ km/h`, String.raw`(D) $9$ km/h`],
          answer: String.raw`(A) $4$ km/h`,
        },
        {
          stem: String.raw`Jay drives from town $P$ to town $Q$ at $60$ km/h. At what speed must he drive back from $Q$ to $P$ along the same road so that his average speed for the whole round trip is $80$ km/h?`,
          difficulty: 3,
          answer: String.raw`120 km/h`,
        },
      ],
    },
    {
      id: "W3-circular-track",
      name: String.raw`Circular tracks`,
      tests: String.raw`Runners or cyclists going round a closed track, in the same or opposite directions. Recognise it by "a 400 m track … when do they first meet?" or "how many times do they pass each other?"`,
      questions: [
        {
          stem: String.raw`Two runners start together from the same point on a $400$ m circular track and run in opposite directions. One runs at $3$ m/s and the other at $5$ m/s. After how many seconds do they first meet?`,
          difficulty: 1,
          answer: String.raw`50 seconds`,
        },
        {
          stem: String.raw`Two runners start together from the same point on a $400$ m circular track and run in opposite directions at $3$ m/s and $5$ m/s. How many times do they pass each other in the first $7$ minutes?`,
          difficulty: 2,
          answer: String.raw`8 times`,
        },
        {
          stem: String.raw`Three cyclists start together from the same point on a $600$ m circular track and ride in the same direction at $4$ m/s, $5$ m/s and $7$ m/s. After how many minutes are all three cyclists together at the same point for the first time after the start?`,
          difficulty: 3,
          answer: String.raw`10 minutes`,
        },
      ],
    },
    {
      id: "W3-trains",
      name: String.raw`Trains, poles, bridges and other trains`,
      tests: String.raw`A train of some length passes a pole, crosses a bridge or tunnel, or passes another train. Recognise it by "a train … m long" and "completely". Follow the front of the train and add the lengths.`,
      questions: [
        {
          stem: String.raw`A train $180$ m long passes a lamp post in $12$ seconds. What is the speed of the train in m/s?`,
          difficulty: 1,
          answer: String.raw`15 m/s`,
        },
        {
          stem: String.raw`The diagram shows two trains on parallel tracks travelling towards each other. One train is $160$ m long and travels at $20$ m/s. The other is $200$ m long and travels at $25$ m/s. How many seconds pass from the moment their fronts meet until their rears pass each other?`,
          difficulty: 2,
          figure: {
            type: "plot",
            x: [-1, 19],
            y: [-2.1, 4.3],
            equal: true,
            axes: false,
            polygons: [
              { points: [[0, 1.55], [8, 1.55], [8, 2.55], [0, 2.55]], fill: true, tone: "accent" },
              { points: [[8, 0.1], [18, 0.1], [18, 1.1], [8, 1.1]], fill: true, tone: "good" },
            ],
            segments: [
              { from: [-0.8, 1.45], to: [18.8, 1.45], tone: "muted", thin: true },
              { from: [-0.8, 0], to: [18.8, 0], tone: "muted", thin: true },
              { from: [2, 3.2], to: [6, 3.2], tone: "accent", arrow: true, label: "20 m/s", pos: "n", style: "plain" },
              { from: [16, -0.7], to: [12, -0.7], tone: "good", arrow: true, label: "25 m/s", pos: "s", style: "plain" },
            ],
            labels: [
              { x: 4, y: 2.05, text: "160 m", pos: "c", style: "small" },
              { x: 13, y: 0.6, text: "200 m", pos: "c", style: "small" },
            ],
            alt: "Two trains on parallel tracks with their fronts level. The upper train, 160 m long, moves right at 20 m/s. The lower train, 200 m long, moves left at 25 m/s.",
          },
          answer: String.raw`8 seconds`,
        },
        {
          stem: String.raw`At a steady speed, a train takes $25$ seconds to pass completely through a tunnel $300$ m long, and $35$ seconds to pass completely over a bridge $500$ m long. ("Completely" means from the moment the front enters until the rear leaves.) How long is the train?`,
          difficulty: 3,
          answer: String.raw`200 m`,
        },
      ],
    },
    {
      id: "W3-work-rates",
      name: String.raw`Working together`,
      tests: String.raw`People who each take a known time for a job work together or take turns. Recognise it by "A alone takes … , B alone takes …". Add the fractions of the job done per day or hour.`,
      questions: [
        {
          stem: String.raw`Mr Ang can paint a long fence in $20$ hours. His son can paint it in $30$ hours. How long will they take if they work together?`,
          difficulty: 1,
          choices: [String.raw`(A) $12$ hours`, String.raw`(B) $12.5$ hours`, String.raw`(C) $25$ hours`, String.raw`(D) $50$ hours`],
          answer: String.raw`(A) $12$ hours`,
        },
        {
          stem: String.raw`Kumar and Lee working together can finish a job in $12$ days. Kumar working alone takes $20$ days. How many days would Lee take working alone?`,
          difficulty: 2,
          answer: String.raw`30 days`,
        },
        {
          stem: String.raw`Pip can build a wall alone in $10$ days, and Quinn can build it alone in $15$ days. Pip works alone for some days, then Quinn finishes the wall alone. The wall took $12$ days altogether. For how many days did Pip work?`,
          difficulty: 3,
          answer: String.raw`6 days`,
        },
      ],
    },
    {
      id: "W3-pipes",
      name: String.raw`Pipes filling and emptying`,
      tests: String.raw`Taps fill and drains empty a tank, all at the same time or in stages. Recognise it by "fills the tank in … minutes" and "empties a full tank in …". Filling fractions add, draining fractions subtract.`,
      questions: [
        {
          stem: String.raw`A tap fills an empty tank in $6$ minutes. A drain empties a full tank in $10$ minutes. If the tap and the drain are both open, how long does it take to fill the empty tank?`,
          difficulty: 1,
          answer: String.raw`15 minutes`,
        },
        {
          stem: String.raw`Tap $A$ fills an empty tank in $12$ minutes and tap $B$ fills it in $18$ minutes. A drain empties a full tank in $36$ minutes. If both taps and the drain are all open, how long does it take to fill the empty tank?`,
          difficulty: 2,
          choices: [String.raw`(A) $6$ minutes`, String.raw`(B) $7.2$ minutes`, String.raw`(C) $9$ minutes`, String.raw`(D) $12$ minutes`, String.raw`(E) $66$ minutes`],
          answer: String.raw`(C) $9$ minutes`,
        },
        {
          stem: String.raw`Pipe $A$ can fill an empty pool in $8$ hours and pipe $B$ can fill it in $12$ hours. Pipe $A$ is turned on alone for $2$ hours, then pipe $B$ is turned on as well. How long does it take to fill the pool, counting from when pipe $A$ was turned on?`,
          difficulty: 3,
          answer: String.raw`5 h 36 min`,
        },
      ],
    },
  ],
});
