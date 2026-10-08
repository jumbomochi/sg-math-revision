H2.addTopic({
  id: "S1",
  title: "Data Handling and Analysis",
  paper: "Paper 1 / Paper 2",
  summary: String.raw`Statistical diagrams, averages, quartiles, standard deviation, cumulative frequency curves and box plots, and comparing data sets.`,
  syllabus: {
    include: [
      String.raw`simple concepts in collecting, classifying and tabulating data`,
      String.raw`analysis and interpretation of: tables, bar graphs, pictograms, line graphs, pie charts, dot diagrams, histograms with equal class intervals, stem-and-leaf diagrams, cumulative frequency diagrams, box-and-whisker plots`,
      String.raw`purposes and uses, advantages and disadvantages of the different forms of statistical representations`,
      String.raw`drawing simple inference from statistical diagrams`,
      String.raw`explaining why a given statistical diagram leads to misinterpretation of data`,
      String.raw`mean, mode and median as measures of central tendency for a set of data`,
      String.raw`purposes and use of mean, mode and median`,
      String.raw`calculation of the mean for grouped data`,
      String.raw`quartiles and percentiles`,
      String.raw`range, interquartile range and standard deviation as measures of spread for a set of data`,
      String.raw`calculation of the standard deviation for a set of data (grouped and ungrouped)`,
      String.raw`using the mean and standard deviation to compare two sets of data`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`Collecting and tabulating data; pie charts and bar graphs`,
      body: String.raw`- **Discrete** data are counted (number of siblings). **Continuous** data are measured (height, time) and are grouped into classes such as $150 < h \le 160$.
- A **frequency table** records how often each value or class occurs. Use tally marks when collecting, and check that the frequencies add up to the total.
- **Bar graph**: separate bars of equal width, height $=$ frequency. Good for comparing categories.
- **Pictogram**: symbols stand for a fixed number of items (always give a key). Eye-catching, but part-symbols are hard to read.
- **Pie chart**: shows each category as a fraction of the whole. Angle of a sector
$$= \frac{\text{frequency}}{\text{total frequency}} \times 360^\circ.$$
It does not show actual frequencies unless the total is given.
- **Line graph**: shows how a quantity changes over time; the points are joined in order.`,
      figure: [
        {
          type: "plot",
          x: [0, 10],
          y: [0.3, 5.7],
          equal: true,
          axes: false,
          polygons: [
            {
              points: [[5, 3], [5, 5.4], [5.126, 5.397], [5.251, 5.387], [5.375, 5.37], [5.499, 5.348], [5.621, 5.318], [5.742, 5.283], [5.86, 5.241], [5.976, 5.193], [6.09, 5.138], [6.2, 5.078], [6.307, 5.013], [6.411, 4.942], [6.51, 4.865], [6.606, 4.784], [6.697, 4.697], [6.784, 4.606], [6.865, 4.51], [6.942, 4.411], [7.013, 4.307], [7.078, 4.2], [7.138, 4.09], [7.193, 3.976], [7.241, 3.86], [7.283, 3.742], [7.318, 3.621], [7.348, 3.499], [7.37, 3.375], [7.387, 3.251], [7.397, 3.126], [7.4, 3], [7.397, 2.874], [7.387, 2.749], [7.37, 2.625], [7.348, 2.501], [7.318, 2.379], [7.283, 2.258], [7.241, 2.14], [7.193, 2.024], [7.138, 1.91], [7.078, 1.8], [7.013, 1.693], [6.942, 1.589], [6.865, 1.49], [6.784, 1.394], [6.697, 1.303], [6.606, 1.216], [6.51, 1.135], [6.411, 1.058]],
              fill: true,
              tone: "accent",
            },
            {
              points: [[5, 3], [6.411, 1.058], [6.307, 0.987], [6.2, 0.922], [6.09, 0.862], [5.976, 0.807], [5.86, 0.759], [5.742, 0.717], [5.621, 0.682], [5.499, 0.652], [5.375, 0.63], [5.251, 0.613], [5.126, 0.603], [5, 0.6], [4.874, 0.603], [4.749, 0.613], [4.625, 0.63], [4.501, 0.652], [4.379, 0.682], [4.258, 0.717], [4.14, 0.759], [4.024, 0.807], [3.91, 0.862], [3.8, 0.922], [3.693, 0.987], [3.589, 1.058], [3.49, 1.135], [3.394, 1.216], [3.303, 1.303], [3.216, 1.394], [3.135, 1.49], [3.058, 1.589]],
              fill: true,
              tone: "good",
            },
            {
              points: [[5, 3], [3.058, 1.589], [2.987, 1.693], [2.922, 1.8], [2.862, 1.91], [2.807, 2.024], [2.759, 2.14], [2.717, 2.258], [2.682, 2.379], [2.652, 2.501], [2.63, 2.625], [2.613, 2.749], [2.603, 2.874], [2.6, 3], [2.603, 3.126], [2.613, 3.251], [2.63, 3.375], [2.652, 3.499], [2.682, 3.621], [2.717, 3.742], [2.759, 3.86], [2.807, 3.976], [2.862, 4.09], [2.922, 4.2], [2.987, 4.307], [3.058, 4.411]],
              fill: true,
              tone: "warn",
            },
            {
              points: [[5, 3], [3.058, 4.411], [3.135, 4.51], [3.216, 4.606], [3.303, 4.697], [3.394, 4.784], [3.49, 4.865], [3.589, 4.942], [3.693, 5.013], [3.8, 5.078], [3.91, 5.138], [4.024, 5.193], [4.14, 5.241], [4.258, 5.283], [4.379, 5.318], [4.501, 5.348], [4.625, 5.37], [4.749, 5.387], [4.874, 5.397], [5, 5.4]],
              fill: true,
              tone: "muted",
            },
          ],
          labels: [
            { x: 6.379, y: 3.618, text: "Bus", style: "small" },
            { x: 6.379, y: 3.198, text: "144°", style: "plain" },
            { x: 4.773, y: 1.738, text: "MRT", style: "small" },
            { x: 4.773, y: 1.318, text: "90°", style: "plain" },
            { x: 3.55, y: 3.17, text: "Walk", style: "small" },
            { x: 3.55, y: 2.75, text: "72°", style: "plain" },
            { x: 4.342, y: 4.462, text: "Car", style: "small" },
            { x: 4.342, y: 4.042, text: "54°", style: "plain" },
          ],
          caption: String.raw`Pie chart: angle $= \dfrac{\text{frequency}}{\text{total}} \times 360^\circ$.`,
          alt: "Pie chart of how 40 students travel to school: Bus 144 degrees, MRT 90 degrees, Walk 72 degrees, Car 54 degrees.",
        },
        {
          type: "plot",
          x: [0, 5],
          y: [-2.2, 18],
          height: 220,
          axisLabels: ["", "Frequency"],
          originLabel: false,
          bars: [[1, 16], [2, 10], [3, 8], [4, 6]],
          barWidth: 0.55,
          xTicks: [
            { x: 1, label: "Bus" },
            { x: 2, label: "MRT" },
            { x: 3, label: "Walk" },
            { x: 4, label: "Car" },
          ],
          yTicks: [
            { y: 4, label: "4" },
            { y: 8, label: "8" },
            { y: 12, label: "12" },
            { y: 16, label: "16" },
          ],
          caption: String.raw`The same data as a bar graph: easy to compare frequencies.`,
          alt: "Bar graph of the same 40 students: Bus 16, MRT 10, Walk 8, Car 6. Bars are separate with gaps between them.",
        },
      ],
    },
    {
      title: String.raw`Dot diagrams and stem-and-leaf diagrams`,
      body: String.raw`Both keep **every individual value**, so the mode, median and range can be read off directly.

- **Dot diagram**: one dot per value above a number line. Good for small sets of discrete data; the shape of the distribution is easy to see.
- **Stem-and-leaf diagram**: the stem is the leading digit(s), each leaf is the last digit. Leaves must be in order, lined up in columns, and there **must be a key**.

| Stem | Leaf |
| 2 | 4 6 9 |
| 3 | 0 3 3 7 |
| 4 | 2 5 |

Key: $2 \mid 4$ means 24. Here the values are 24, 26, 29, 30, 33, 33, 37, 42, 45.

- A **back-to-back** stem-and-leaf diagram compares two sets; the leaves on the left are read from right to left (in the key, $5 \mid 3 \mid 2$ might mean 35 on the left and 32 on the right).`,
      figure: {
        type: "plot",
        x: [33.58, 41.42],
        y: [-0.9, 2.52],
        height: 170,
        axisLabels: ["", null],
        originLabel: false,
        xTicks: [
          { x: 34, label: "34" },
          { x: 35, label: "35" },
          { x: 36, label: "36" },
          { x: 37, label: "37" },
          { x: 38, label: "38" },
          { x: 39, label: "39" },
          { x: 40, label: "40" },
          { x: 41, label: "41" },
        ],
        points: [
          { x: 35, y: 0.42 },
          { x: 36, y: 0.42 },
          { x: 36, y: 0.84 },
          { x: 36, y: 1.26 },
          { x: 37, y: 0.42 },
          { x: 37, y: 0.84 },
          { x: 37, y: 1.26 },
          { x: 37, y: 1.68 },
          { x: 37, y: 2.1 },
          { x: 38, y: 0.42 },
          { x: 38, y: 0.84 },
          { x: 38, y: 1.26 },
          { x: 38, y: 1.68 },
          { x: 39, y: 0.42 },
          { x: 39, y: 0.84 },
          { x: 40, y: 0.42 },
        ],
        labels: [
          { x: 37.5, y: -0.75, text: "Shoe size", style: "small" },
        ],
        caption: String.raw`Dot diagram: each dot is one value. The mode (37) is the tallest column.`,
        alt: "Dot diagram of 16 shoe sizes: one dot at 35, three at 36, five at 37, four at 38, two at 39, one at 40.",
      },
    },
    {
      title: String.raw`Histograms with equal class intervals`,
      body: String.raw`- A histogram shows **grouped continuous** data. The bars **touch**, because the classes have no gaps.
- With equal class widths, the **height of each bar is the frequency**.
- The **modal class** is the class with the tallest bar.
- Compared with a stem-and-leaf diagram, a histogram can show a large data set, but the individual values are lost.`,
      figure: {
        type: "plot",
        x: [-4, 53],
        y: [-3.64, 14],
        height: 240,
        axisLabels: ["", "Frequency"],
        originLabel: false,
        bars: [[5, 3], [15, 12], [25, 8], [35, 9], [45, 4]],
        barWidth: 10,
        xTicks: [
          { x: 0, label: "0" },
          { x: 10, label: "10" },
          { x: 20, label: "20" },
          { x: 30, label: "30" },
          { x: 40, label: "40" },
          { x: 50, label: "50" },
        ],
        yTicks: [
          { y: 2, label: "2" },
          { y: 4, label: "4" },
          { y: 6, label: "6" },
          { y: 8, label: "8" },
          { y: 10, label: "10" },
          { y: 12, label: "12" },
        ],
        labels: [
          { x: 25, y: -2.8, text: "Time (minutes)", style: "small" },
        ],
        caption: String.raw`Histogram (equal class widths): bars touch, height $=$ frequency. The modal class is $10 < t \le 20$.`,
        alt: "Histogram of times with equal class width 10 minutes: 0 to 10 frequency 3, 10 to 20 frequency 12, 20 to 30 frequency 8, 30 to 40 frequency 9, 40 to 50 frequency 4. Bars touch.",
      },
    },
    {
      title: String.raw`Mean, median and mode`,
      body: String.raw`- **Mean** $= \dfrac{\text{sum of values}}{\text{number of values}}$. From a frequency table, $\text{mean} = \dfrac{\sum fx}{\sum f}$ **(Given)**.
- **Grouped data**: use the **mid-value** of each class as $x$. The result is only an **estimate**, because the actual values are not known.
- **Median**: the middle value when the data are **in order**. For $n$ values it is the $\left(\frac{n+1}{2}\right)$th value; for even $n$, take the mean of the two middle values.
- **Mode**: the value with the highest frequency. There may be more than one mode.

**Which average?**
- Mean: uses every value, but is pulled by extreme values (outliers).
- Median: not affected by extreme values — best for skewed data such as salaries or house prices.
- Mode: the only average for non-numerical data (e.g. favourite colour), and useful for "most popular size".`,
    },
    {
      title: String.raw`Measures of spread: range, IQR and standard deviation`,
      body: String.raw`- **Range** $=$ largest $-$ smallest. Easy, but depends only on the two extreme values.
- **Interquartile range** $= Q_3 - Q_1$: the spread of the middle 50%. Not affected by extreme values.
- **Standard deviation** measures the spread about the mean, using every value **(Given)**:
$$\text{standard deviation} = \sqrt{\frac{\sum fx^2}{\sum f} - \left(\frac{\sum fx}{\sum f}\right)^2}.$$
For ungrouped data take every $f = 1$, i.e. $\sqrt{\dfrac{\sum x^2}{n} - \bar{x}^2}$.
- Use the calculator's statistics mode: enter the values (and frequencies), and take the **population** standard deviation $\sigma_x$, not $s_x$. Write down the mean and standard deviation to 3 significant figures.
- A **smaller** standard deviation means the values are **closer to the mean**: more consistent.`,
      figure: [
        {
          type: "plot",
          x: [-0.6, 10.6],
          y: [-0.1, 2.1],
          height: 130,
          axisLabels: ["", null],
          originLabel: false,
          xTicks: [
            { x: 0, label: "0" },
            { x: 1, label: "1" },
            { x: 2, label: "2" },
            { x: 3, label: "3" },
            { x: 4, label: "4" },
            { x: 5, label: "5" },
            { x: 6, label: "6" },
            { x: 7, label: "7" },
            { x: 8, label: "8" },
            { x: 9, label: "9" },
            { x: 10, label: "10" },
          ],
          points: [
            { x: 3, y: 0.42 },
            { x: 4, y: 0.42 },
            { x: 4, y: 0.84 },
            { x: 4, y: 1.26 },
            { x: 5, y: 0.42 },
            { x: 5, y: 0.84 },
            { x: 5, y: 1.26 },
            { x: 5, y: 1.68 },
            { x: 6, y: 0.42 },
            { x: 6, y: 0.84 },
            { x: 6, y: 1.26 },
            { x: 7, y: 0.42 },
          ],
          caption: String.raw`Mean 5, small standard deviation (about 1.1).`,
          alt: "Dot diagram of 12 values clustered closely around 5, from 3 to 7.",
        },
        {
          type: "plot",
          x: [-0.6, 10.6],
          y: [-0.1, 1.26],
          height: 130,
          axisLabels: ["", null],
          originLabel: false,
          xTicks: [
            { x: 0, label: "0" },
            { x: 1, label: "1" },
            { x: 2, label: "2" },
            { x: 3, label: "3" },
            { x: 4, label: "4" },
            { x: 5, label: "5" },
            { x: 6, label: "6" },
            { x: 7, label: "7" },
            { x: 8, label: "8" },
            { x: 9, label: "9" },
            { x: 10, label: "10" },
          ],
          points: [
            { x: 1, y: 0.42 },
            { x: 1, y: 0.84 },
            { x: 2, y: 0.42 },
            { x: 4, y: 0.42 },
            { x: 4, y: 0.84 },
            { x: 5, y: 0.42 },
            { x: 5, y: 0.84 },
            { x: 6, y: 0.42 },
            { x: 6, y: 0.84 },
            { x: 8, y: 0.42 },
            { x: 9, y: 0.42 },
            { x: 9, y: 0.84 },
          ],
          caption: String.raw`Same mean 5, larger standard deviation (about 2.7).`,
          alt: "Dot diagram of 12 values spread widely from 1 to 9, also with mean 5.",
        },
      ],
    },
    {
      title: String.raw`Quartiles and percentiles`,
      body: String.raw`- The **median** $Q_2$ splits the ordered data into two halves. The **lower quartile** $Q_1$ is the median of the lower half, and the **upper quartile** $Q_3$ is the median of the upper half.
- For an odd number of values, leave the median out of both halves. E.g. for 1, 3, 4, 6, 7, 9, 10: median 6, $Q_1 = 3$, $Q_3 = 9$.
- The **$p$th percentile** is the value below which $p$% of the data lie. $Q_1$, the median and $Q_3$ are the 25th, 50th and 75th percentiles.
- For grouped data, quartiles and percentiles are estimated from a cumulative frequency curve.`,
    },
    {
      title: String.raw`Cumulative frequency curves`,
      body: String.raw`1. Make a **cumulative frequency** table: running totals of the frequencies.
2. Plot each cumulative frequency against the **upper class boundary** (e.g. 20 for $10 < t \le 20$). Start at the lower boundary of the first class with cumulative frequency 0.
3. Join the points with a smooth curve.

For $n$ values, read across from $\frac{n}{2}$ for the median, $\frac{n}{4}$ for $Q_1$ and $\frac{3n}{4}$ for $Q_3$; for the 90th percentile read from $\frac{90}{100}n$.

- "How many scored **more than** 60?" Read the cumulative frequency at 60, then **subtract from the total**.
- Draw your reading lines on the graph to show your method.`,
      figure: {
        type: "plot",
        x: [-4, 64],
        y: [-24, 108],
        height: 280,
        axisLabels: ["", "Cumulative frequency"],
        originLabel: false,
        curves: [
          {
            fn: "x => { const X = [0,10,20,30,40,50,60], Y = [0,6,24,58,84,96,100], M = [0.6,1.2,2.6,3,1.9,0.8,0.4]; let i = 0; while (i < X.length - 2 && x > X[i + 1]) i++; const h = X[i + 1] - X[i], t = (x - X[i]) / h, t2 = t * t, t3 = t2 * t; return (2*t3 - 3*t2 + 1)*Y[i] + (t3 - 2*t2 + t)*h*M[i] + (-2*t3 + 3*t2)*Y[i + 1] + (t3 - t2)*h*M[i + 1]; }",
            domain: [0, 60],
          },
        ],
        segments: [
          { from: [0, 25], to: [20.374, 25], dashed: true, thin: true, tone: "muted" },
          { from: [20.374, 25], to: [20.374, 0], dashed: true, thin: true, tone: "muted" },
          { from: [0, 50], to: [27.588, 50], dashed: true, thin: true, tone: "warn" },
          { from: [27.588, 50], to: [27.588, 0], dashed: true, thin: true, tone: "warn" },
          { from: [0, 75], to: [36.003, 75], dashed: true, thin: true, tone: "muted" },
          { from: [36.003, 75], to: [36.003, 0], dashed: true, thin: true, tone: "muted" },
        ],
        xTicks: [
          { x: 10, label: "10" },
          { x: 20, label: "20" },
          { x: 30, label: "30" },
          { x: 40, label: "40" },
          { x: 50, label: "50" },
          { x: 60, label: "60" },
        ],
        yTicks: [
          { y: 25, label: "25" },
          { y: 50, label: "50" },
          { y: 75, label: "75" },
          { y: 100, label: "100" },
        ],
        labels: [
          { x: 20.374, y: 4, text: "Q₁", pos: "nw", style: "small" },
          { x: 27.588, y: 4, text: "median", pos: "ne", style: "small", tone: "warn" },
          { x: 36.003, y: 4, text: "Q₃", pos: "ne", style: "small" },
          { x: 30, y: -18, text: "Mass (kg)", style: "small" },
        ],
        caption: String.raw`For 100 values: median at 50, $Q_1$ at 25, $Q_3$ at 75 on the vertical axis. Read across to the curve, then down.`,
        alt: "S-shaped cumulative frequency curve rising from 0 to 100 over masses 0 to 60 kg. Dashed lines go across from 25, 50 and 75 on the vertical axis to the curve and then down to the horizontal axis, marking the lower quartile, the median and the upper quartile.",
      },
    },
    {
      title: String.raw`Box-and-whisker plots`,
      body: String.raw`A box-and-whisker plot shows the **five-number summary**: minimum, $Q_1$, median, $Q_3$, maximum.

- The box runs from $Q_1$ to $Q_3$ (its length is the IQR), with a line at the median. The whiskers reach the minimum and maximum.
- It shows the centre and spread at a glance and is ideal for **comparing** two distributions drawn on the same scale.
- It does not show the individual values or the mean.`,
      figure: {
        type: "plot",
        x: [8.56, 48.88],
        y: [-0.8, 1.8],
        height: 150,
        axisLabels: ["", null],
        originLabel: false,
        xTicks: [
          { x: 10, label: "10" },
          { x: 14, label: "14" },
          { x: 18, label: "18" },
          { x: 22, label: "22" },
          { x: 26, label: "26" },
          { x: 30, label: "30" },
          { x: 34, label: "34" },
          { x: 38, label: "38" },
          { x: 42, label: "42" },
          { x: 46, label: "46" },
        ],
        polygons: [
          { points: [[20, 0.75], [31, 0.75], [31, 1.25], [20, 1.25]], fill: true, tone: "accent" },
        ],
        segments: [
          { from: [26, 0.75], to: [26, 1.25], tone: "ink" },
          { from: [12, 1], to: [20, 1], tone: "ink" },
          { from: [31, 1], to: [44, 1], tone: "ink" },
          { from: [12, 0.875], to: [12, 1.125], tone: "ink" },
          { from: [44, 0.875], to: [44, 1.125], tone: "ink" },
        ],
        labels: [
          { x: 28, y: -0.62, text: "Mark", style: "small" },
          { x: 12, y: 1.45, text: "min", pos: "n", style: "small" },
          { x: 20, y: 1.45, text: "Q₁", pos: "n", style: "small" },
          { x: 26, y: 1.45, text: "median", pos: "n", style: "small" },
          { x: 31, y: 1.45, text: "Q₃", pos: "n", style: "small" },
          { x: 44, y: 1.45, text: "max", pos: "n", style: "small" },
        ],
        caption: String.raw`Box-and-whisker plot of the five-number summary. The box shows the middle 50%: its length is the IQR.`,
        alt: "Box-and-whisker plot on a mark scale: whisker from 12 to 20, box from 20 to 31 with the median line at 26, whisker from 31 to 44. Labels above: min, Q1, median, Q3, max.",
      },
    },
    {
      title: String.raw`Comparing two sets of data`,
      body: String.raw`Make **two** comparisons, always **in context**:

1. **Average**: compare the means (or medians). "On average, the plants given fertiliser grew taller than the others, since their mean height is greater."
2. **Spread**: compare the standard deviations (or IQRs). "The fertilised plants' heights are more consistent, since their standard deviation is smaller."

- Quote the numbers you are comparing.
- Compare like with like: mean with mean and standard deviation with standard deviation, or median with median and IQR with IQR.
- "Better" depends on the context: for times, a lower average is better; for scores, a higher one is.`,
    },
    {
      title: String.raw`Misleading statistical diagrams`,
      body: String.raw`Common reasons why a diagram gives a wrong impression:

- The vertical axis **does not start at zero**, so small differences look large.
- The scale is **uneven** (e.g. years equally spaced when the gaps between them are not equal).
- Pictograms or 3D pictures where the symbol is enlarged in **both** directions, so the area grows faster than the value.
- Pie charts comparing two groups with different totals: a bigger sector does not mean a bigger number.
- Bars of different widths, or no labels, units or key.

When explaining, say **what** is wrong and **what false impression** it gives, e.g. "The axis starts at 94, so the 2025 bar looks about 3½ times as tall as the 2023 bar, but sales rose by only about 5%."`,
      figure: [
        {
          type: "plot",
          x: [-0.3, 4],
          y: [94, 102.5],
          height: 200,
          axisLabels: ["", "Sales"],
          originLabel: false,
          polygons: [
            { points: [[0.7, 94], [1.3, 94], [1.3, 96], [0.7, 96]], fill: true, tone: "accent" },
            { points: [[1.7, 94], [2.3, 94], [2.3, 98], [1.7, 98]], fill: true, tone: "accent" },
            { points: [[2.7, 94], [3.3, 94], [3.3, 101], [2.7, 101]], fill: true, tone: "accent" },
          ],
          xTicks: [
            { x: 1, label: "2023" },
            { x: 2, label: "2024" },
            { x: 3, label: "2025" },
          ],
          yTicks: [
            { y: 94, label: "94" },
            { y: 96, label: "96" },
            { y: 98, label: "98" },
            { y: 100, label: "100" },
          ],
          caption: String.raw`Axis starts at 94: the 2025 bar looks about 3½ times the 2023 bar.`,
          alt: "Bar chart of sales 96, 98 and 101 for 2023 to 2025 with the vertical axis starting at 94, so the bars look very different.",
        },
        {
          type: "plot",
          x: [-0.3, 4],
          y: [0, 110],
          height: 200,
          axisLabels: ["", "Sales"],
          originLabel: false,
          bars: [[1, 96], [2, 98], [3, 101]],
          barWidth: 0.6,
          xTicks: [
            { x: 1, label: "2023" },
            { x: 2, label: "2024" },
            { x: 3, label: "2025" },
          ],
          yTicks: [
            { y: 20, label: "20" },
            { y: 40, label: "40" },
            { y: 60, label: "60" },
            { y: 80, label: "80" },
            { y: 100, label: "100" },
          ],
          caption: String.raw`Axis from 0: the change is only about 5%.`,
          alt: "The same sales 96, 98 and 101 drawn with the vertical axis starting at 0; the bars are almost the same height.",
        },
      ],
    },
  ],
  archetypes: [
    {
      id: "S1-pie-chart",
      name: String.raw`Reading pie charts and bar graphs`,
      tests: String.raw`Finding unknown angles in a pie chart, converting angles to frequencies, fractions or percentages, and commenting on the choice of diagram. Recognise by a pie chart with the total given.`,
      questions: [
        {
          stem: String.raw`The pie chart shows how 180 students travel to school.`,
          figure: {
            type: "plot",
            x: [0, 10],
            y: [0.3, 5.7],
            equal: true,
            axes: false,
            polygons: [
              {
                points: [[5, 3], [5, 5.4], [5.126, 5.397], [5.251, 5.387], [5.375, 5.37], [5.499, 5.348], [5.621, 5.318], [5.742, 5.283], [5.86, 5.241], [5.976, 5.193], [6.09, 5.138], [6.2, 5.078], [6.307, 5.013], [6.411, 4.942], [6.51, 4.865], [6.606, 4.784], [6.697, 4.697], [6.784, 4.606], [6.865, 4.51], [6.942, 4.411], [7.013, 4.307], [7.078, 4.2], [7.138, 4.09], [7.193, 3.976], [7.241, 3.86], [7.283, 3.742], [7.318, 3.621], [7.348, 3.499], [7.37, 3.375], [7.387, 3.251], [7.397, 3.126], [7.4, 3], [7.397, 2.874], [7.387, 2.749], [7.37, 2.625], [7.348, 2.501], [7.318, 2.379], [7.283, 2.258], [7.241, 2.14], [7.193, 2.024], [7.138, 1.91], [7.078, 1.8]],
                fill: true,
                tone: "muted",
              },
              {
                points: [[5, 3], [7.078, 1.8], [7.013, 1.693], [6.942, 1.589], [6.865, 1.49], [6.784, 1.394], [6.697, 1.303], [6.606, 1.216], [6.51, 1.135], [6.411, 1.058], [6.307, 0.987], [6.2, 0.922], [6.09, 0.862], [5.976, 0.807], [5.86, 0.759], [5.742, 0.717], [5.621, 0.682], [5.499, 0.652], [5.375, 0.63], [5.251, 0.613], [5.126, 0.603], [5, 0.6], [4.874, 0.603], [4.749, 0.613], [4.625, 0.63], [4.501, 0.652], [4.379, 0.682], [4.258, 0.717], [4.14, 0.759], [4.024, 0.807], [3.91, 0.862], [3.8, 0.922], [3.693, 0.987], [3.589, 1.058]],
                fill: true,
                tone: "muted",
              },
              {
                points: [[5, 3], [3.589, 1.058], [3.49, 1.135], [3.394, 1.216], [3.303, 1.303], [3.216, 1.394], [3.135, 1.49], [3.058, 1.589], [2.987, 1.693], [2.922, 1.8], [2.862, 1.91], [2.807, 2.024], [2.759, 2.14], [2.717, 2.258], [2.682, 2.379], [2.652, 2.501], [2.63, 2.625], [2.613, 2.749], [2.603, 2.874], [2.6, 3], [2.603, 3.126], [2.613, 3.251]],
                fill: true,
                tone: "muted",
              },
              {
                points: [[5, 3], [2.613, 3.251], [2.63, 3.375], [2.652, 3.499], [2.682, 3.621], [2.717, 3.742], [2.759, 3.86], [2.807, 3.976], [2.862, 4.09], [2.922, 4.2], [2.987, 4.307], [3.058, 4.411]],
                fill: true,
                tone: "muted",
              },
              {
                points: [[5, 3], [3.058, 4.411], [3.135, 4.51], [3.216, 4.606], [3.303, 4.697], [3.394, 4.784], [3.49, 4.865], [3.589, 4.942], [3.693, 5.013], [3.8, 5.078], [3.91, 5.138], [4.024, 5.193], [4.14, 5.241], [4.258, 5.283], [4.379, 5.318], [4.501, 5.348], [4.625, 5.37], [4.749, 5.387], [4.874, 5.397], [5, 5.4]],
                fill: true,
                tone: "muted",
              },
            ],
            labels: [
              { x: 6.256, y: 3.895, text: "Bus", style: "small" },
              { x: 6.256, y: 3.475, text: "120°", style: "plain" },
              { x: 5.301, y: 1.752, text: "MRT", style: "small" },
              { x: 5.301, y: 1.332, text: "96°", style: "plain" },
              { x: 3.675, y: 2.58, text: "Car", style: "small" },
              { x: 3.675, y: 2.16, text: "2x°", style: "plain" },
              { x: 3.366, y: 3.797, text: "Cycle", style: "small" },
              { x: 3.366, y: 3.377, text: "x°", style: "plain" },
              { x: 4.342, y: 4.462, text: "Walk", style: "small" },
              { x: 4.342, y: 4.042, text: "54°", style: "plain" },
            ],
            alt: "Pie chart of how 180 students travel to school. Bus 120 degrees, MRT 96 degrees, Car 2x degrees, Cycle x degrees, Walk 54 degrees.",
          },
          parts: [
            { label: "(a)", text: String.raw`Find the value of $x$.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the number of students who travel by MRT.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the percentage of the students who walk.`, marks: 1 },
            { label: "(d)", text: String.raw`The information is to be shown in a bar graph instead. Find the height of the bar for students who travel by car.`, marks: 1 },
            { label: "(e)", text: String.raw`Give one advantage of showing this information in a pie chart rather than a bar graph.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S1-dot-diagram",
      name: String.raw`Dot diagrams: averages and changes to the data`,
      tests: String.raw`Reading the mean, median and mode from a dot diagram, and working out what happens to an average when values are added or removed. Recognise by a dot diagram and "Find the mean…", "Two more students…".`,
      questions: [
        {
          stem: String.raw`The dot diagram shows the number of books read last month by each of 20 students.`,
          figure: {
            type: "plot",
            x: [-0.36, 6.36],
            y: [-0.9, 2.94],
            height: 190,
            axisLabels: ["", null],
            originLabel: false,
            xTicks: [
              { x: 0, label: "0" },
              { x: 1, label: "1" },
              { x: 2, label: "2" },
              { x: 3, label: "3" },
              { x: 4, label: "4" },
              { x: 5, label: "5" },
              { x: 6, label: "6" },
            ],
            points: [
              { x: 0, y: 0.42 },
              { x: 0, y: 0.84 },
              { x: 1, y: 0.42 },
              { x: 1, y: 0.84 },
              { x: 1, y: 1.26 },
              { x: 2, y: 0.42 },
              { x: 2, y: 0.84 },
              { x: 2, y: 1.26 },
              { x: 2, y: 1.68 },
              { x: 2, y: 2.1 },
              { x: 2, y: 2.52 },
              { x: 3, y: 0.42 },
              { x: 3, y: 0.84 },
              { x: 3, y: 1.26 },
              { x: 3, y: 1.68 },
              { x: 4, y: 0.42 },
              { x: 4, y: 0.84 },
              { x: 5, y: 0.42 },
              { x: 5, y: 0.84 },
              { x: 6, y: 0.42 },
            ],
            labels: [
              { x: 3, y: -0.75, text: "Number of books read", style: "small" },
            ],
            alt: "Dot diagram of the number of books read by 20 students: 0 books 2 dots, 1 book 3 dots, 2 books 6 dots, 3 books 4 dots, 4 books 2 dots, 5 books 2 dots, 6 books 1 dot.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the mode.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the median.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the mean number of books read.`, marks: 1 },
            { label: "(d)", text: String.raw`Two more students are added to the group. They read the same number of books as each other. The mean for the 22 students is 2.5. Find the number of books read by each of the two new students.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S1-stem-and-leaf",
      name: String.raw`Stem-and-leaf diagrams: median, quartiles and comparison`,
      tests: String.raw`Reading ordered values from a stem-and-leaf diagram to find the median, quartiles, IQR and range, and comparing with another group. Recognise by a stem-and-leaf diagram with a key.`,
      questions: [
        {
          stem: String.raw`The stem-and-leaf diagram shows the times, in seconds, taken by 15 students to solve a puzzle.

| Stem | Leaf |
| 3 | 2 5 8 |
| 4 | 1 1 4 7 9 |
| 5 | 0 2 3 8 |
| 6 | 1 4 |
| 7 | 0 |

Key: $3 \mid 2$ means 32 seconds.`,
          parts: [
            { label: "(a)", text: String.raw`Find the median time.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the interquartile range.`, marks: 2 },
            { label: "(c)", text: String.raw`A second group of students solved the same puzzle. Their median time was 44 seconds and their interquartile range was 25 seconds. Make two comparisons between the times of the two groups.`, marks: 2 },
            { label: "(d)", text: String.raw`Give one advantage of a stem-and-leaf diagram over a histogram for showing these data.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S1-unknown-frequency",
      name: String.raw`Frequency tables with an unknown frequency`,
      tests: String.raw`Forming and solving an equation from a given mean, or using the position of the median or the mode to find the possible values of an unknown frequency. Recognise by a frequency table containing $x$ or $y$.`,
      questions: [
        {
          stem: String.raw`The table shows the number of goals scored by a team in each of its matches in a season.

| Number of goals | 0 | 1 | 2 | 3 | 4 |
| Number of matches | 5 | 9 | $x$ | 6 | 3 |

The mean number of goals scored per match is 1.8.`,
          parts: [
            { label: "(a)", text: String.raw`Show that $x = 12$.`, marks: 2 },
            { label: "(b)", text: String.raw`Find the median number of goals.`, marks: 1 },
            { label: "(c)", text: String.raw`Find the standard deviation of the number of goals per match.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The table shows the number of goals scored by another team in each of its matches.

| Number of goals | 0 | 1 | 2 | 3 | 4 |
| Number of matches | 5 | 9 | $y$ | 6 | 3 |

The median number of goals is 1.`,
          parts: [
            { label: "(a)", text: String.raw`Find the greatest possible value of $y$.`, marks: 2 },
            { label: "(b)", text: String.raw`Given instead that the mode is 2, write down the least possible value of $y$.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S1-grouped-data",
      name: String.raw`Grouped data and histograms: estimating the mean and standard deviation`,
      tests: String.raw`Reading frequencies from a histogram or grouped table, using mid-values to estimate the mean and standard deviation, and naming the modal class. Recognise by class intervals such as $10 < t \le 20$.`,
      questions: [
        {
          stem: String.raw`The histogram shows the times, $t$ minutes, that 40 students took to travel to school.`,
          figure: {
            type: "plot",
            x: [-4, 53],
            y: [-4.42, 17],
            height: 260,
            axisLabels: ["", "Frequency"],
            originLabel: false,
            bars: [[5, 4], [15, 11], [25, 15], [35, 7], [45, 3]],
            barWidth: 10,
            xTicks: [
              { x: 0, label: "0" },
              { x: 10, label: "10" },
              { x: 20, label: "20" },
              { x: 30, label: "30" },
              { x: 40, label: "40" },
              { x: 50, label: "50" },
            ],
            yTicks: [
              { y: 2, label: "2" },
              { y: 4, label: "4" },
              { y: 6, label: "6" },
              { y: 8, label: "8" },
              { y: 10, label: "10" },
              { y: 12, label: "12" },
              { y: 14, label: "14" },
              { y: 16, label: "16" },
            ],
            labels: [
              { x: 25, y: -3.4, text: "Time, t minutes", style: "small" },
            ],
            segments: [
              { from: [0, 2], to: [50, 2], thin: true, tone: "muted" },
              { from: [0, 4], to: [50, 4], thin: true, tone: "muted" },
              { from: [0, 6], to: [50, 6], thin: true, tone: "muted" },
              { from: [0, 8], to: [50, 8], thin: true, tone: "muted" },
              { from: [0, 10], to: [50, 10], thin: true, tone: "muted" },
              { from: [0, 12], to: [50, 12], thin: true, tone: "muted" },
              { from: [0, 14], to: [50, 14], thin: true, tone: "muted" },
              { from: [0, 16], to: [50, 16], thin: true, tone: "muted" },
            ],
            alt: "Histogram of the times taken by 40 students, with class width 10 minutes and horizontal grid lines every 2 units: 0 to 10 frequency 4, 10 to 20 frequency 11, 20 to 30 frequency 15, 30 to 40 frequency 7, 40 to 50 frequency 3.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the modal class.`, marks: 1 },
            { label: "(b)", text: String.raw`Calculate an estimate of the mean time.`, marks: 2 },
            { label: "(c)", text: String.raw`Calculate an estimate of the standard deviation of the times.`, marks: 1 },
            { label: "(d)", text: String.raw`Explain why your answer to part (b) is an estimate.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The masses of 50 apples from Farm P are shown in the table.

| Mass ($m$ grams) | $100 < m \le 120$ | $120 < m \le 140$ | $140 < m \le 160$ | $160 < m \le 180$ | $180 < m \le 200$ |
| Frequency | 6 | 14 | 18 | 9 | 3 |`,
          parts: [
            { label: "(a)", text: String.raw`Calculate an estimate of the mean mass and the standard deviation.`, marks: 3 },
            { label: "(b)", text: String.raw`For 50 apples from Farm Q, the mean mass is 152.4 g and the standard deviation is 12.8 g. A supermarket wants apples that are large and of similar size. Which farm should it buy from? Give two reasons for your answer.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S1-compare-mean-sd",
      name: String.raw`Comparing two data sets using mean and standard deviation`,
      tests: String.raw`Calculating the mean and standard deviation of two ungrouped data sets and making two comparisons in context (average and consistency). Recognise by two lists of values and "Which … is more consistent?".`,
      questions: [
        {
          stem: String.raw`Two archers, Amir and Ben, each shoot 8 rounds. Their scores are shown below.

Amir: 12, 15, 9, 14, 10, 18, 13, 13

Ben: 16, 6, 20, 9, 11, 19, 8, 15`,
          parts: [
            { label: "(a)", text: String.raw`Calculate the mean and the standard deviation of Amir's scores.`, marks: 2 },
            { label: "(b)", text: String.raw`The mean of Ben's scores is 13. Calculate the standard deviation of Ben's scores.`, marks: 1 },
            { label: "(c)", text: String.raw`The coach wants to pick the more consistent archer. Who should be picked? Explain your answer.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "S1-cumulative-frequency",
      name: String.raw`Cumulative frequency curves: median, quartiles and percentiles`,
      tests: String.raw`Using a given cumulative frequency curve to estimate the median, IQR and percentiles, and the number of values above or below a given value, then comparing with another group. Recognise by an S-shaped curve with "Use your graph to estimate…".`,
      questions: [
        {
          stem: String.raw`The cumulative frequency curve shows the marks scored by 80 students in a test.`,
          figure: {
            type: "plot",
            x: [-5, 104],
            y: [-14, 86],
            height: 330,
            axisLabels: ["", "Cumulative frequency"],
            originLabel: false,
            segments: [
              { from: [10, 0], to: [10, 80], thin: true, tone: "muted" },
              { from: [20, 0], to: [20, 80], thin: true, tone: "muted" },
              { from: [30, 0], to: [30, 80], thin: true, tone: "muted" },
              { from: [40, 0], to: [40, 80], thin: true, tone: "muted" },
              { from: [50, 0], to: [50, 80], thin: true, tone: "muted" },
              { from: [60, 0], to: [60, 80], thin: true, tone: "muted" },
              { from: [70, 0], to: [70, 80], thin: true, tone: "muted" },
              { from: [80, 0], to: [80, 80], thin: true, tone: "muted" },
              { from: [90, 0], to: [90, 80], thin: true, tone: "muted" },
              { from: [100, 0], to: [100, 80], thin: true, tone: "muted" },
              { from: [0, 10], to: [100, 10], thin: true, tone: "muted" },
              { from: [0, 20], to: [100, 20], thin: true, tone: "muted" },
              { from: [0, 30], to: [100, 30], thin: true, tone: "muted" },
              { from: [0, 40], to: [100, 40], thin: true, tone: "muted" },
              { from: [0, 50], to: [100, 50], thin: true, tone: "muted" },
              { from: [0, 60], to: [100, 60], thin: true, tone: "muted" },
              { from: [0, 70], to: [100, 70], thin: true, tone: "muted" },
              { from: [0, 80], to: [100, 80], thin: true, tone: "muted" },
            ],
            curves: [
              {
                fn: "x => { const X = [10,20,30,40,50,60,70,80,90,100], Y = [0,2,6,14,28,46,62,72,78,80], M = [0.2,0.3,0.6,1.1,1.6,1.7,1.3,0.8,0.4,0.2]; let i = 0; while (i < X.length - 2 && x > X[i + 1]) i++; const h = X[i + 1] - X[i], t = (x - X[i]) / h, t2 = t * t, t3 = t2 * t; return (2*t3 - 3*t2 + 1)*Y[i] + (t3 - 2*t2 + t)*h*M[i] + (-2*t3 + 3*t2)*Y[i + 1] + (t3 - t2)*h*M[i + 1]; }",
                domain: [10, 100],
              },
            ],
            xTicks: [
              { x: 10, label: "10" },
              { x: 20, label: "20" },
              { x: 30, label: "30" },
              { x: 40, label: "40" },
              { x: 50, label: "50" },
              { x: 60, label: "60" },
              { x: 70, label: "70" },
              { x: 80, label: "80" },
              { x: 90, label: "90" },
              { x: 100, label: "100" },
            ],
            yTicks: [
              { y: 10, label: "10" },
              { y: 20, label: "20" },
              { y: 30, label: "30" },
              { y: 40, label: "40" },
              { y: 50, label: "50" },
              { y: 60, label: "60" },
              { y: 70, label: "70" },
              { y: 80, label: "80" },
            ],
            labels: [
              { x: 50, y: -10.5, text: "Mark", style: "small" },
            ],
            alt: "Cumulative frequency curve for the marks of 80 students on a grid, marks 0 to 100 and cumulative frequency 0 to 80. The curve passes through (10, 0), (20, 2), (30, 6), (40, 14), (50, 28), (60, 46), (70, 62), (80, 72), (90, 78) and (100, 80).",
          },
          parts: [
            { label: "(a)", text: String.raw`Use the curve to estimate`, parts: [
              { label: "(i)", text: String.raw`the median mark,`, marks: 1 },
              { label: "(ii)", text: String.raw`the interquartile range,`, marks: 2 },
              { label: "(iii)", text: String.raw`the number of students who scored more than 75 marks.`, marks: 2 },
            ] },
            { label: "(b)", text: String.raw`The top 10% of the students receive a prize. Use the curve to estimate the least mark needed to receive a prize.`, marks: 2 },
            { label: "(c)", text: String.raw`Another class sat the same test. Their median mark was 52 and their interquartile range was 30 marks. Make two comparisons between the marks of the two groups.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S1-box-plots",
      name: String.raw`Box-and-whisker plots: reading and comparing`,
      tests: String.raw`Reading the median, quartiles and range from box-and-whisker plots, comparing two distributions, and drawing a box plot from a five-number summary. Recognise by box plots on a common scale.`,
      questions: [
        {
          stem: String.raw`The box-and-whisker plots show the times, in seconds, taken by a group of boys and a group of girls to complete a reaction test.`,
          figure: {
            type: "plot",
            x: [3.6, 42.8],
            y: [-0.8, 2.7],
            height: 200,
            axisLabels: ["", null],
            originLabel: false,
            xTicks: [
              ...Array.from({ length: 36 }, (_, i) => i + 5).filter((v) => v % 5 !== 0).map((v) => ({ x: v, label: "" })),
              { x: 5, label: "5" },
              { x: 10, label: "10" },
              { x: 15, label: "15" },
              { x: 20, label: "20" },
              { x: 25, label: "25" },
              { x: 30, label: "30" },
              { x: 35, label: "35" },
              { x: 40, label: "40" },
            ],
            polygons: [
              { points: [[15, 1.65], [27, 1.65], [27, 2.15], [15, 2.15]], fill: true, tone: "accent" },
              { points: [[18, 0.55], [24, 0.55], [24, 1.05], [18, 1.05]], fill: true, tone: "accent" },
            ],
            segments: [
              { from: [22, 1.65], to: [22, 2.15], tone: "ink" },
              { from: [8, 1.9], to: [15, 1.9], tone: "ink" },
              { from: [27, 1.9], to: [38, 1.9], tone: "ink" },
              { from: [8, 1.775], to: [8, 2.025], tone: "ink" },
              { from: [38, 1.775], to: [38, 2.025], tone: "ink" },
              { from: [21, 0.55], to: [21, 1.05], tone: "ink" },
              { from: [10, 0.8], to: [18, 0.8], tone: "ink" },
              { from: [24, 0.8], to: [31, 0.8], tone: "ink" },
              { from: [10, 0.675], to: [10, 0.925], tone: "ink" },
              { from: [31, 0.675], to: [31, 0.925], tone: "ink" },
            ],
            labels: [
              { x: 4.2, y: 2.2, text: "Boys", pos: "e", style: "small" },
              { x: 4.2, y: 1.1, text: "Girls", pos: "e", style: "small" },
              { x: 22.5, y: -0.62, text: "Time (seconds)", style: "small" },
            ],
            alt: "Two box-and-whisker plots on the same time scale. Boys: minimum 8, lower quartile 15, median 22, upper quartile 27, maximum 38. Girls: minimum 10, lower quartile 18, median 21, upper quartile 24, maximum 31.",
          },
          parts: [
            { label: "(a)", text: String.raw`Write down the median time for the boys.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the interquartile range for the girls.`, marks: 1 },
            { label: "(c)", text: String.raw`Make two comparisons between the times of the boys and the girls.`, marks: 2 },
            { label: "(d)", text: String.raw`Explain why the box-and-whisker plots cannot be used to find the mean times.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`For the 15 puzzle times in the stem-and-leaf diagram below, draw a box-and-whisker plot on a scale from 30 to 75 seconds.

| Stem | Leaf |
| 3 | 2 5 8 |
| 4 | 1 1 4 7 9 |
| 5 | 0 2 3 8 |
| 6 | 1 4 |
| 7 | 0 |

Key: $3 \mid 2$ means 32 seconds.`,
          marks: 3,
        },
      ],
    },
    {
      id: "S1-choose-average",
      name: String.raw`Choosing the most suitable average`,
      tests: String.raw`Calculating the mean, median and mode of a small data set with an extreme value, and explaining which average best represents the data. Recognise by "Which average… best represents…? Explain your answer."`,
      questions: [
        {
          stem: String.raw`The monthly salaries, in dollars, of the 9 employees of a small company are

2800, 3000, 3100, 3100, 3300, 3500, 3600, 3800, 15000.`,
          parts: [
            { label: "(a)", text: String.raw`Find the mean salary.`, marks: 1 },
            { label: "(b)", text: String.raw`Write down the median salary and the modal salary.`, marks: 2 },
            { label: "(c)", text: String.raw`The company advertises that its "average salary is over \$4500". Explain why this is misleading, and state which average would better represent a typical salary.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "S1-misleading-diagrams",
      name: String.raw`Explaining why a diagram is misleading`,
      tests: String.raw`Spotting a false impression in a given diagram — an axis that does not start at zero, an uneven scale, enlarged pictures — and explaining it with numbers. Recognise by "Explain why this graph is misleading".`,
      questions: [
        {
          stem: String.raw`A newspaper uses the bar chart below to compare the pass rates of three schools.`,
          figure: {
            type: "plot",
            x: [-0.3, 4],
            y: [70, 81],
            height: 220,
            axisLabels: ["", "Pass rate (%)"],
            originLabel: false,
            polygons: [
              { points: [[0.7, 70], [1.3, 70], [1.3, 72], [0.7, 72]], fill: true, tone: "accent" },
              { points: [[1.7, 70], [2.3, 70], [2.3, 74], [1.7, 74]], fill: true, tone: "accent" },
              { points: [[2.7, 70], [3.3, 70], [3.3, 78], [2.7, 78]], fill: true, tone: "accent" },
            ],
            xTicks: [
              { x: 1, label: "School A" },
              { x: 2, label: "School B" },
              { x: 3, label: "School C" },
            ],
            yTicks: [
              { y: 70, label: "70" },
              { y: 72, label: "72" },
              { y: 74, label: "74" },
              { y: 76, label: "76" },
              { y: 78, label: "78" },
              { y: 80, label: "80" },
            ],
            alt: "Bar chart of pass rates: School A 72%, School B 74%, School C 78%. The vertical axis starts at 70%, so School C's bar looks four times as tall as School A's.",
          },
          parts: [
            { label: "(a)", text: String.raw`Explain why the bar chart is misleading.`, marks: 1 },
            { label: "(b)", text: String.raw`A reader says "School C's pass rate is four times School A's". Use the actual pass rates to show that this is not true.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A club secretary draws the line graph below to show that its membership is growing at a steady rate.`,
          figure: {
            type: "plot",
            x: [0, 6],
            y: [-4, 52],
            height: 220,
            axisLabels: ["", "Members"],
            originLabel: false,
            segments: [
              { from: [1, 20], to: [2, 24], tone: "accent" },
              { from: [2, 24], to: [3, 30], tone: "accent" },
              { from: [3, 30], to: [4, 38], tone: "accent" },
              { from: [4, 38], to: [5, 46], tone: "accent" },
            ],
            points: [
              { x: 1, y: 20 },
              { x: 2, y: 24 },
              { x: 3, y: 30 },
              { x: 4, y: 38 },
              { x: 5, y: 46 },
            ],
            xTicks: [
              { x: 1, label: "2015" },
              { x: 2, label: "2016" },
              { x: 3, label: "2018" },
              { x: 4, label: "2023" },
              { x: 5, label: "2025" },
            ],
            yTicks: [
              { y: 10, label: "10" },
              { y: 20, label: "20" },
              { y: 30, label: "30" },
              { y: 40, label: "40" },
              { y: 50, label: "50" },
            ],
            alt: "Line graph of club membership: 20 in 2015, 24 in 2016, 30 in 2018, 38 in 2023 and 46 in 2025. The years are equally spaced along the horizontal axis even though the gaps between them are 1, 2, 5 and 2 years.",
          },
          parts: [
            { label: "(a)", text: String.raw`Explain why the graph is misleading.`, marks: 1 },
            { label: "(b)", text: String.raw`Find the mean increase in membership per year from 2018 to 2023, and compare it with the increase from 2015 to 2016.`, marks: 2 },
          ],
        },
      ],
    },
  ],
});
