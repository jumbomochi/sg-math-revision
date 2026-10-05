H2.addTopic({
  id: "6.6",
  title: "Correlation and Linear Regression",
  paper: "Paper 2B",
  summary: String.raw`Scatter diagrams, correlation, regression lines, transformations to linearity and how reliable an estimate is.`,
  syllabus: {
    include: [
      String.raw`use of scatter diagram to judge if there is a plausible linear relationship between the two variables`,
      String.raw`correlation coefficient as a measure of the fit of a linear model to the scatter diagram`,
      String.raw`interpreting the product moment correlation coefficient (in particular, values close to $-1$, $0$ and $1$)`,
      String.raw`concepts of linear regression and method of least squares to find the equation of the regression line`,
      String.raw`concepts of interpolation and extrapolation`,
      String.raw`use of the appropriate regression line to make prediction or estimate a value in practical situations, including explaining how well the situation is modelled by the linear regression model`,
      String.raw`use of a square, reciprocal or logarithmic transformation to achieve linearity`,
    ],
    exclude: [
      String.raw`problems involving derivation of formulae`,
      String.raw`relationship $r^2 = b_1 b_2$, where $b_1$ and $b_2$ are regression coefficients`,
      String.raw`hypothesis tests`,
    ],
  },
  concepts: [
    {
      title: String.raw`Scatter diagrams`,
      body: String.raw`Plot the **independent** (controlled or explanatory) variable on the horizontal axis.

- A sketch for full marks: labelled axes with variable names, a sensible range of values marked on each axis (e.g. the smallest and largest values), and points in the correct relative positions.
- Comment on the pattern: positive/negative, roughly linear or curved, and any point that does not fit (an outlier, possibly a recording error).
- A linear model is plausible only if the points lie close to a straight line — **look at the diagram, not just $r$**.`,
    },
    {
      title: String.raw`Product moment correlation coefficient $r$ (MF27)`,
      body: String.raw`$$r = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sqrt{\sum (x - \bar{x})^2 \sum (y - \bar{y})^2}}, \qquad -1 \le r \le 1.$$

$r$ measures how well a **linear** model fits the data. Obtain it from the GC (LinReg with diagnostics on), and quote it to at least 3 s.f., typically 4 s.f.

- $r$ close to $1$ ($-1$): strong positive (negative) **linear** correlation; points lie close to a line with positive (negative) gradient.
- $r$ close to $0$: little or no **linear** correlation — there may still be a strong **non-linear** relationship (e.g. points on a curve with a turning point).
- $r$ is unchanged by swapping $x$ and $y$, or by changes of units of the form $x \mapsto px + q$ with $p > 0$ (the sign of $r$ flips if $p < 0$).`,
    },
    {
      title: String.raw`Correlation is not causation`,
      body: String.raw`A value of $r$ close to $\pm 1$ shows a strong linear association, **not** that a change in $x$ causes a change in $y$. Both variables may be driven by a third factor (e.g. temperature drives both ice-cream sales and beach attendance). Also, a high $|r|$ does not by itself prove the relationship is linear — always check the shape of the scatter diagram.`,
    },
    {
      title: String.raw`Least squares regression lines (MF27)`,
      body: String.raw`The regression line of $y$ on $x$, $y = a + bx$, minimises the sum of squares of the **vertical** distances $\sum (y_i - a - bx_i)^2$. From MF27:
$$y - \bar{y} = b(x - \bar{x}), \qquad b = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sum (x - \bar{x})^2}.$$

- The line of $x$ on $y$ minimises the sum of squares of the **horizontal** distances; it is a different line unless $|r| = 1$.
- **Both lines pass through $(\bar{x}, \bar{y})$** — use this to find a missing data value when the equation of a regression line is given.
- Write the equation in context with the actual variable names, coefficients to 3 s.f., and keep full GC values for any estimate.`,
    },
    {
      title: String.raw`Choosing the appropriate line`,
      body: String.raw`- If one variable is **controlled/independent** (set by the experimenter, e.g. time, temperature, dosage, $x$-values at fixed intervals), use the regression line of the dependent variable on the independent variable — **for estimates in either direction**.
- If **both** variables are random (e.g. heights and arm spans of students), use $y$ on $x$ to estimate $y$ from a given $x$, and $x$ on $y$ to estimate $x$ from a given $y$.
- State your reason explicitly in context: "since $t$ is the independent variable, the line of $N$ on $t$ is used."`,
    },
    {
      title: String.raw`Reliability of an estimate`,
      body: String.raw`An estimate is **reliable** if both:

1. it is obtained by **interpolation** — the given value lies within the range of the data; and
2. $|r|$ is close to $1$ (strong linear correlation) and the appropriate line is used.

**Extrapolation** (outside the data range) is unreliable because the linear relationship may not continue beyond the data. Look also for contextual impossibilities (a negative mass, a percentage above 100) as evidence that a linear model breaks down.`,
    },
    {
      title: String.raw`Transformations to linearity`,
      body: String.raw`| Model | Plot $Y$ against $X$ | Typical scatter shape |
| $y = a + bx^2$ | $y$ against $x^2$ | curving, gradient magnitude increasing with $x$ |
| $y = a + b\ln x$ | $y$ against $\ln x$ | curving, gradient magnitude decreasing, levelling off slowly |
| $y = a + \dfrac{b}{x}$ | $y$ against $\dfrac{1}{x}$ | steep near $x = 0$, approaching $y = a$ |
| $\ln y = a + bx$ (i.e. $y = \ee^{a}\ee^{bx}$) | $\ln y$ against $x$ | exponential growth or decay, $y > 0$ |

To choose a model: (i) rule out a model whose shape does not match the scatter diagram (e.g. $y = a + bx^2$ with $b < 0$ is concave, so it cannot fit points that curve upwards); (ii) among the rest, choose the one whose transformed data give $|r|$ **closest to 1**. Then find the regression line on the transformed variables and convert back.`,
    },
    {
      title: String.raw`Changing data and outliers`,
      body: String.raw`- Removing an outlier that lies far from the trend usually makes $|r|$ closer to 1 and can change the gradient markedly; say whether the outlier should be excluded (e.g. a recording error, or an abnormal condition stated in the question).
- Adding the point $(\bar{x}, \bar{y})$ leaves $\bar{x}$, $\bar{y}$, $\sum (x-\bar{x})(y-\bar{y})$, $\sum (x-\bar{x})^2$ and $\sum (y-\bar{y})^2$ unchanged, so **neither the regression line nor $r$ changes**.
- If a value is corrected, recompute $r$ and the line on the GC with the corrected list rather than adjusting by hand.`,
    },
  ],
  archetypes: [
    {
      id: "6.6-scatter-outlier",
      name: String.raw`Scatter diagram, outliers and plausibility of a linear model`,
      tests: String.raw`Sketching a scatter diagram from a table, identifying a point that does not fit the trend and explaining it in context, and judging whether a linear model is suitable before and after removing it.`,
      questions: [
        {
          stem: String.raw`The number of hours, $x$, spent revising and the score, $y$, obtained in a test by 8 students are shown in the table.

| $x$ | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| $y$ | 31 | 38 | 44 | 22 | 55 | 61 | 64 | 72 |`,
          parts: [
            { label: "(i)", text: String.raw`Draw a scatter diagram for these values, labelling the axes.`, marks: 2 },
            { label: "(ii)", text: String.raw`One of the students was unwell on the day of the test. Circle on your diagram the point which is likely to correspond to this student.`, marks: 1 },
            { label: "(iii)", text: String.raw`Omitting this point, calculate the product moment correlation coefficient for the remaining 7 points, and comment on its value in the context of the data.`, marks: 2 },
            { label: "(iv)", text: String.raw`Explain why it is appropriate to omit the point identified in part (ii) when modelling the data.`, marks: 1 },
            { label: "(v)", text: String.raw`Using the remaining 7 points, find the equation of the regression line of $y$ on $x$, and use it to estimate the score of a student who revises for 5 hours and is well on the day of the test.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.6-interpret-r",
      name: String.raw`Interpreting $r$: non-linear relationships and causation`,
      tests: String.raw`Explaining what values of $r$ close to $-1$, $0$ and $1$ do and do not show — in particular that $r \approx 0$ allows a strong curved relationship, and that $r \approx 1$ does not prove cause and effect.`,
      questions: [
        {
          stem: String.raw`An agricultural scientist applies different amounts of a fertiliser, $x$ kg per plot, to 9 identical plots and records the yield, $y$ kg, of a crop from each plot. The results are shown in the table and in the scatter diagram.

| $x$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
| $y$ | 2.1 | 4.8 | 6.9 | 8.2 | 8.6 | 8.1 | 7.0 | 4.7 | 2.3 |`,
          figure: {
            type: "plot",
            x: [0, 10], y: [0, 10],
            height: 260,
            scatter: [[1, 2.1], [2, 4.8], [3, 6.9], [4, 8.2], [5, 8.6], [6, 8.1], [7, 7.0], [8, 4.7], [9, 2.3]],
            axisLabels: ["x", "y"],
            ticks: true,
            alt: "Scatter diagram of yield against amount of fertiliser, rising then falling",
          },
          parts: [
            { label: "(i)", text: String.raw`Calculate the product moment correlation coefficient between $x$ and $y$.`, marks: 1 },
            { label: "(ii)", text: String.raw`A student concludes from the value in part (i) that the amount of fertiliser has no effect on the yield. Comment on this conclusion, with reference to the scatter diagram.`, marks: 2 },
            { label: "(iii)", text: String.raw`Explain why it would not be appropriate to use a regression line of $y$ on $x$ to estimate the yield when 5.5 kg of fertiliser is applied.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`For 8 months of a year, a coastal town records the monthly ice-cream sales, $x$ (in thousands of dollars), and the number of people, $y$, rescued by lifeguards from the sea.

| $x$ | 12 | 15 | 21 | 28 | 34 | 40 | 37 | 25 |
| $y$ | 2 | 3 | 5 | 7 | 8 | 11 | 9 | 6 |`,
          parts: [
            { label: "(i)", text: String.raw`Calculate the product moment correlation coefficient between $x$ and $y$, and interpret its value in context.`, marks: 2 },
            { label: "(ii)", text: String.raw`A local newspaper claims that "eating ice-cream causes people to get into difficulty in the sea". Comment on this claim.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.6-regression-estimate-reliability",
      name: String.raw`Regression line, estimates and reliability`,
      tests: String.raw`Finding the regression line of $y$ on $x$ on the GC, interpreting its gradient in context, making estimates, and commenting on reliability via interpolation/extrapolation and the value of $r$.`,
      questions: [
        {
          stem: String.raw`A factory records the number of units produced, $x$, and the total production cost, $\$y$ thousand, on 8 randomly chosen days.

| $x$ | 12 | 18 | 25 | 31 | 37 | 44 | 50 | 57 |
| $y$ | 24.1 | 28.6 | 31.9 | 36.8 | 39.4 | 45.3 | 47.2 | 53.0 |`,
          parts: [
            { label: "(i)", text: String.raw`Calculate the product moment correlation coefficient between $x$ and $y$, and explain whether its value suggests that a linear model is appropriate.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find the equation of the regression line of $y$ on $x$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Interpret, in context, the gradient and the $y$-intercept of the regression line.`, marks: 2 },
            { label: "(iv)", text: String.raw`Use your regression line to estimate the total cost on a day when 40 units are produced, and on a day when 90 units are produced. Comment on the reliability of each estimate.`, marks: 3 },
          ],
        },
      ],
    },
    {
      id: "6.6-choose-regression-line",
      name: String.raw`Choosing between $y$ on $x$ and $x$ on $y$`,
      tests: String.raw`Deciding which regression line to use for an estimate — depending on whether one variable is controlled, or both are random — and justifying the choice in context.`,
      questions: [
        {
          stem: String.raw`The heights, $h$ cm, and arm spans, $s$ cm, of a random sample of 8 students are recorded.

| $h$ | 158 | 162 | 165 | 168 | 171 | 175 | 179 | 184 |
| $s$ | 155 | 163 | 162 | 170 | 169 | 178 | 177 | 187 |`,
          parts: [
            { label: "(i)", text: String.raw`Calculate the product moment correlation coefficient between $h$ and $s$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Find the equations of the regression line of $s$ on $h$ and the regression line of $h$ on $s$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Use the appropriate regression line to estimate the arm span of a student whose height is 172 cm, and to estimate the height of a student whose arm span is 165 cm. Explain your choice of line in each case.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`In an experiment, a chemist sets the temperature, $x$ °C, of a solution at 8 fixed values and measures the time, $y$ seconds, for a reaction to complete.

| $x$ | 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 |
| $y$ | 52.3 | 47.1 | 43.8 | 38.2 | 35.0 | 30.9 | 26.4 | 22.5 |`,
          parts: [
            { label: "(i)", text: String.raw`Find the equation of the appropriate regression line, giving a reason for your choice.`, marks: 2 },
            { label: "(ii)", text: String.raw`Use your line to estimate the temperature at which the reaction takes 40 seconds, and explain why the regression line of $x$ on $y$ should not be used for this estimate.`, marks: 2 },
            { label: "(iii)", text: String.raw`Explain why the line would not be suitable for estimating the reaction time at a temperature of 90 °C.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "6.6-transformation-model",
      name: String.raw`Choosing a non-linear model by transformation`,
      tests: String.raw`Comparing models such as $y = a + bx^2$, $y = a + b\ln x$, $y = a + \dfrac{b}{x}$ and $\ln y = a + bx$ by the shape of the scatter diagram and by $|r|$ of the transformed data, then fitting and using the chosen model.`,
      questions: [
        {
          stem: String.raw`The concentration, $y$ units, of a pollutant in a river is measured at distances $x$ km downstream from a factory outlet.

| $x$ | 1 | 1.5 | 2 | 3 | 4 | 5 | 6 | 8 |
| $y$ | 28.3 | 19.6 | 16.4 | 11.9 | 10.2 | 8.6 | 8.1 | 7.0 |

It is proposed that $y$ can be modelled by one of the following:
$$\text{(A) } y = a + bx^2, \qquad \text{(B) } y = a + b\ln x, \qquad \text{(C) } y = a + \frac{b}{x},$$
where $a$ and $b$ are constants.`,
          parts: [
            { label: "(i)", text: String.raw`Sketch a scatter diagram of the data, and explain why model (A) is not appropriate.`, marks: 3 },
            { label: "(ii)", text: String.raw`Calculate the product moment correlation coefficients for models (B) and (C), and hence state, with a reason, which of these is the better model.`, marks: 3 },
            { label: "(iii)", text: String.raw`Using the better model, find the values of $a$ and $b$, and estimate the concentration 2.5 km downstream.`, marks: 3 },
            { label: "(iv)", text: String.raw`Comment on the reliability of using the model to estimate the concentration 12 km downstream.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The number of bacteria, $N$ thousand, in a culture is recorded at hourly intervals, $t$ hours after the start of an experiment.

| $t$ | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
| $N$ | 48 | 73 | 98 | 142 | 205 | 280 | 410 |`,
          parts: [
            { label: "(i)", text: String.raw`Calculate the product moment correlation coefficient between $t$ and $N$, and between $t$ and $\ln N$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Using your answers to part (i), and without drawing a scatter diagram, explain which of $N = a + bt$ and $\ln N = c + dt$ is the better model.`, marks: 1 },
            { label: "(iii)", text: String.raw`For the better model, find the equation of the appropriate regression line, and hence express $N$ in the form $N = k\ee^{dt}$, giving the values of $k$ and $d$ correct to 3 significant figures.`, marks: 3 },
            { label: "(iv)", text: String.raw`Estimate the number of bacteria after 4.5 hours, and the time at which the number of bacteria reaches 1 000 000. Comment on the reliability of each estimate.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "6.6-mean-point-changes",
      name: String.raw`Using $(\bar{x}, \bar{y})$; effect of adding or correcting data`,
      tests: String.raw`Finding a missing data value from a given regression line using the fact that it passes through $(\bar{x}, \bar{y})$, and deciding the effect on $r$ and the line of adding, removing or correcting a point.`,
      questions: [
        {
          stem: String.raw`The following table shows 6 pairs of observations of variables $x$ and $y$, where $p$ is a constant.

| $x$ | 2 | 4 | 6 | 8 | 10 | 12 |
| $y$ | 7.4 | $p$ | 11.9 | 16.2 | 17.4 | 21.7 |

The equation of the regression line of $y$ on $x$ is $y = 4.3 + 1.4x$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the value of $p$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Calculate the product moment correlation coefficient between $x$ and $y$.`, marks: 1 },
            { label: "(iii)", text: String.raw`A seventh observation $(\bar{x}, \bar{y})$ is added to the data. State, with a reason, the effect on the regression line of $y$ on $x$ and on the product moment correlation coefficient.`, marks: 2 },
            { label: "(iv)", text: String.raw`For the original 6 observations, it is later found that the value 17.4 was recorded wrongly and should be 18.4. Find the new equation of the regression line of $y$ on $x$ and the new value of the product moment correlation coefficient.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "6.6-change-of-units",
      name: String.raw`Effect of a change of units on $r$ and the regression line`,
      tests: String.raw`Recognising that $r$ is unchanged by a linear change of scale while the regression coefficients change, and rewriting a regression line in new units (e.g. °C to °F).`,
      questions: [
        {
          stem: String.raw`The maximum daily temperature, $T$ °C, and the electricity consumption, $E$ thousand kWh, of an office building are recorded on 7 days.

| $T$ | 26.5 | 27.8 | 28.4 | 29.9 | 30.6 | 31.8 | 33.2 |
| $E$ | 182 | 190 | 201 | 209 | 214 | 230 | 238 |`,
          parts: [
            { label: "(i)", text: String.raw`Calculate the product moment correlation coefficient between $T$ and $E$, and find the equation of the regression line of $E$ on $T$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Explain why the value of the $E$-intercept of this line has no practical meaning.`, marks: 1 },
            { label: "(iii)", text: String.raw`The temperatures are converted to degrees Fahrenheit, $F$, using $F = 1.8T + 32$. Write down the product moment correlation coefficient between $F$ and $E$, and find the equation of the regression line of $E$ on $F$.`, marks: 3 },
          ],
        },
      ],
    },
  ],
});
