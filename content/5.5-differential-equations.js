H2.addTopic({
  id: "5.5",
  title: "Differential Equations",
  paper: "Paper 1 / Paper 2A",
  summary: String.raw`Solving first-order separable equations (directly, or after a given substitution), formulating them from rates of change in real contexts, and interpreting the solutions.`,
  syllabus: {
    include: [
      String.raw`solving for the general solutions and particular solutions of differential equations of the form $\dfrac{\dd y}{\dd x} = \mathrm{f}(x)\,\mathrm{g}(y)$, including reducing a given differential equation to this form by means of a given substitution`,
      String.raw`formulating a differential equation from a problem situation`,
      String.raw`interpreting a differential equation and its solution in terms of a problem situation`,
    ],
    exclude: [],
  },
  concepts: [
    {
      title: String.raw`General and particular solutions`,
      body: String.raw`- The **general solution** contains arbitrary constant(s): one for each first-order equation in this syllabus.
- A **particular solution** uses given conditions (e.g. $y = 1$ when $x = 0$) to fix the constants.
- $\dfrac{\dd y}{\dd x} = \mathrm{f}(x)$: integrate once, $y = \int \mathrm{f}(x)\,\dd x$.
- In context, $\dfrac{\dd V}{\dd t} = \mathrm{f}(t)$ gives the amount $V$ from its rate of change; the initial amount fixes the constant.`,
    },
    {
      title: String.raw`Separating the variables`,
      body: String.raw`For $\dfrac{\dd y}{\dd x} = \mathrm{f}(x)\,\mathrm{g}(y)$:

$$\int \frac{1}{\mathrm{g}(y)}\,\dd y = \int \mathrm{f}(x)\,\dd x.$$

- Put **one** constant on the $x$ side only.
- The left side often needs a 5.3 technique: partial fractions for $\dfrac{1}{4 - y^2}$, a standard form for $\dfrac{1}{1 + y^2}$, parts on the right side for $\ee^x\cos x$, etc.
- Dividing by $\mathrm{g}(y)$ assumes $\mathrm{g}(y) \ne 0$; constant solutions such as $y = 1$ for $\dfrac{\dd y}{\dd x} = 1 - y$ are equilibrium solutions.
- "Find $y$ in terms of $x$" means make $y$ the subject — an implicit answer such as $\tan^{-1} y = x^2 + C$ is not enough.`,
    },
    {
      title: String.raw`Removing logarithms and the modulus`,
      body: String.raw`From $\ln|y - a| = kt + C$:

$$|y - a| = \ee^{C}\ee^{kt} \ \Rightarrow\ y - a = A\ee^{kt}, \quad A = \pm\ee^{C}.$$

- Either keep the arbitrary constant $A$ (which absorbs the $\pm$) or use the context to fix the sign: in Newton's law of cooling, $\theta > 25$ throughout, so $|\theta - 25| = \theta - 25$. **State** this reason.
- With partial fractions, combine first: $\ln\left|\dfrac{P - 90}{P - 10}\right| = -0.8t + C$, then decide the sign of the fraction from the initial value.
- Substitute the initial condition **before** rearranging, if that makes $C$ simpler.`,
    },
    {
      title: String.raw`Reducing to separable form by a given substitution`,
      body: String.raw`The substitution is always given. Differentiate it to replace $\dfrac{\dd y}{\dd x}$:

| Substitution | Differentiate | Replace |
| $y = ux$ | $\dfrac{\dd y}{\dd x} = u + x\dfrac{\dd u}{\dd x}$ | product rule |
| $z = x + y$ | $\dfrac{\dd z}{\dd x} = 1 + \dfrac{\dd y}{\dd x}$ | |
| $u = y^2$ (say) | $\dfrac{\dd u}{\dd x} = 2y\dfrac{\dd y}{\dd x}$ | chain rule |

The new equation in $u$ and $x$ (or $z$ and $x$) should be separable — a "show that" usually confirms the target form. Solve, then **substitute back** to give the answer in $x$ and $y$.`,
    },
    {
      title: String.raw`Formulating a differential equation`,
      body: String.raw`Translate the words into a rate of change with respect to time $t$:

- "$P$ increases at a rate proportional to $P$": $\dfrac{\dd P}{\dd t} = kP$, $k > 0$.
- "decreases at a rate proportional to $\sqrt{m}$": $\dfrac{\dd m}{\dd t} = -k\sqrt{m}$, $k > 0$ — put the minus sign in and **state $k > 0$**.
- **Newton's law of cooling**: $\dfrac{\dd \theta}{\dd t} = -k(\theta - \theta_\text{room})$, $k > 0$.
- **Inflow–outflow** (tanks, drugs, salt): $\dfrac{\dd x}{\dd t} = (\text{rate in}) - (\text{rate out})$.
- **Logistic growth**: $\dfrac{\dd P}{\dd t} = kP(N - P)$ — growth slows as $P$ approaches the carrying capacity $N$; a "$-h$" term represents constant harvesting.
- Linked quantities (volume and radius) need the chain rule: $\dfrac{\dd V}{\dd t} = \dfrac{\dd V}{\dd r}\cdot\dfrac{\dd r}{\dd t}$.

Unknown constants (the constant of integration and $k$) need **two** conditions; a rate given at a particular value ("when $x = 20$ it is increasing at 2 mg per hour") fixes $k$ directly from the differential equation.`,
    },
    {
      title: String.raw`Interpreting the equation and its solution`,
      body: String.raw`- **Long-term behaviour**: let $t \to \infty$ (e.g. $\ee^{-kt} \to 0$). The limit is an equilibrium value, where $\dfrac{\dd x}{\dd t} = 0$.
- **Equilibria and stability**: the sign of $\dfrac{\dd P}{\dd t}$ either side of an equilibrium tells you whether $P$ moves towards it or away from it — useful for "what happens if the initial population is …".
- **Time to reach a value**: substitute and solve; give the answer to the accuracy asked, with units.
- **Meaning of terms**: say what each term represents in context (birth rate, harvesting rate, leak rate).
- **Validity**: a model may predict negative mass or never reaching zero — comment on its limitations when asked.
- Sketch the solution against $t$ with intercept, asymptote and the correct shape (concave up/down).`,
    },
    {
      title: String.raw`Families of solution curves`,
      body: String.raw`Each value of the arbitrary constant gives one member of the **family of solution curves**. To sketch "three members of the family":

- choose three convenient values of the constant (include a positive, a negative and, if meaningful, zero);
- draw them on **one** diagram, labelling each with its constant value or with a point it passes through;
- show common features: asymptotes (e.g. all approach $y = 1$), intercepts, symmetry, and that members do not cross each other.

A particular solution is the single member through a given point.`,
    },
  ],
  archetypes: [
    {
      id: "5.5-direct-integration",
      name: String.raw`Direct integration: $\frac{\dd y}{\dd x} = \mathrm{f}(x)$`,
      tests: String.raw`Integrating a rate that depends only on the independent variable, using a given condition to obtain a particular solution, and interpreting the result (long-term behaviour, time to reach a value).`,
      questions: [
        {
          stem: String.raw`An empty tank is being filled with water. At time $t$ minutes after filling starts, the volume of water in the tank is $V$ litres, where
$$\frac{\dd V}{\dd t} = 30 - 20\ee^{-0.1t}.$$`,
          parts: [
            { label: "(i)", text: String.raw`Find $V$ in terms of $t$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find the time taken for the tank to contain 500 litres of water.`, marks: 2 },
            { label: "(iii)", text: String.raw`Describe how the rate at which the tank fills changes as $t$ increases.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`The gradient of a curve at the point $(x, y)$ is given by $\dfrac{\dd y}{\dd x} = x\ee^{-x}$. The curve passes through the origin.`,
          parts: [
            { label: "(i)", text: String.raw`Find the equation of the curve.`, marks: 3 },
            { label: "(ii)", text: String.raw`State what happens to $y$ as $x \to \infty$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Sketch the curve for $x \ge 0$.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.5-separable",
      name: String.raw`Separable equations $\frac{\dd y}{\dd x} = \mathrm{f}(x)\mathrm{g}(y)$: general and particular solutions`,
      tests: String.raw`Separating the variables and integrating both sides, where at least one side needs a 5.3 technique (partial fractions, a standard form, parts), then making $y$ the subject.`,
      questions: [
        {
          stem: String.raw`The variables $x$ and $y$ are related by the differential equation
$$\frac{\dd y}{\dd x} = x(4 - y^2),$$
where $|y| < 2$, and $y = 0$ when $x = 0$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $y = \dfrac{2\left(\ee^{2x^2} - 1\right)}{\ee^{2x^2} + 1}$.`, marks: 6 },
            { label: "(ii)", text: String.raw`State the limiting value of $y$ as $x \to \infty$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`Find the particular solution of the differential equation
$$\frac{\dd y}{\dd x} = \ee^{x - y}\cos x$$
for which $y = 0$ when $x = 0$, giving $y$ in terms of $x$.`,
          marks: 7,
        },
      ],
    },
    {
      id: "5.5-given-substitution",
      name: String.raw`Reducing to separable form by a given substitution`,
      tests: String.raw`Differentiating the given substitution (such as $y = ux$ or $z = x + y$) to rewrite $\dfrac{\dd y}{\dd x}$, obtaining a separable equation, solving it and substituting back.`,
      questions: [
        {
          stem: String.raw`It is given that
$$x^2\frac{\dd y}{\dd x} = y^2 + xy + x^2, \quad x > 0.$$`,
          parts: [
            { label: "(i)", text: String.raw`Using the substitution $y = ux$, show that the differential equation can be written as $x\dfrac{\dd u}{\dd x} = 1 + u^2$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Hence find $y$ in terms of $x$, given that $y = 0$ when $x = 1$.`, marks: 4 },
          ],
        },
        {
          stem: String.raw`The variables $x$ and $y$ satisfy the differential equation $\dfrac{\dd y}{\dd x} = (x + y)^2$.`,
          parts: [
            { label: "(i)", text: String.raw`Using the substitution $z = x + y$, show that $\dfrac{\dd z}{\dd x} = 1 + z^2$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Hence find the particular solution for which $y = 0$ when $x = 0$, giving $y$ in terms of $x$.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.5-formulate-proportional",
      name: String.raw`Formulating "rate proportional to …" models`,
      tests: String.raw`Translating a verbal statement about rates into a differential equation with a correctly signed constant, using two conditions to find both constants, and answering a question about the time something takes. May need the chain rule to link related quantities.`,
      questions: [
        {
          stem: String.raw`A sugar cube is placed in a cup of tea. Its mass, $m$ grams, at time $t$ minutes after it is placed in the tea decreases at a rate proportional to $\sqrt{m}$. Initially the mass of the sugar cube is 4 grams, and after 2 minutes its mass is 1 gram.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a differential equation relating $m$ and $t$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Solve the differential equation to find $m$ in terms of $t$.`, marks: 5 },
            { label: "(iii)", text: String.raw`Find the time taken for the sugar cube to dissolve completely, and state the range of values of $t$ for which your expression in part (ii) is valid.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`A spherical snowball melts so that its volume decreases at a rate proportional to its surface area. At time $t$ hours, the radius of the snowball is $r$ cm. Initially the radius is 6 cm, and after 3 hours the radius is 5 cm. [The volume and surface area of a sphere of radius $r$ are $\frac{4}{3}\pi r^3$ and $4\pi r^2$ respectively.]`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd r}{\dd t} = -k$, where $k$ is a positive constant.`, marks: 3 },
            { label: "(ii)", text: String.raw`Find $r$ in terms of $t$.`, marks: 2 },
            { label: "(iii)", text: String.raw`Find the time taken for the volume of the snowball to be halved, giving your answer correct to 3 significant figures.`, marks: 3 },
            { label: "(iv)", text: String.raw`Find the time taken for the snowball to melt completely.`, marks: 1 },
          ],
        },
      ],
    },
    {
      id: "5.5-newton-cooling",
      name: String.raw`Newton's law of cooling`,
      tests: String.raw`Setting up $\dfrac{\dd\theta}{\dd t} = -k(\theta - \theta_\text{room})$, solving with the modulus handled from context, finding $k$ (and sometimes the room temperature) from data, and finding times or the long-term temperature.`,
      questions: [
        {
          stem: String.raw`A cup of coffee at a temperature of 85 °C is placed in a room where the temperature is a constant 25 °C. Newton's law of cooling states that the rate of decrease of the temperature of the coffee is proportional to the difference between the temperature of the coffee and the temperature of the room. After 5 minutes the temperature of the coffee is 65 °C. The temperature of the coffee at time $t$ minutes is $\theta$ °C.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a differential equation relating $\theta$ and $t$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Show that $\theta = 25 + 60\ee^{-kt}$, where $k = \frac{1}{5}\ln\frac{3}{2}$.`, marks: 5 },
            { label: "(iii)", text: String.raw`Find the time taken for the temperature of the coffee to fall to 40 °C, giving your answer correct to 3 significant figures.`, marks: 2 },
            { label: "(iv)", text: String.raw`State what happens to $\theta$ for large values of $t$.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A metal rod is removed from a furnace and left to cool in a room whose temperature is a constant $A$ °C. The temperature of the rod, $\theta$ °C, at time $t$ minutes satisfies $\dfrac{\dd\theta}{\dd t} = -k(\theta - A)$, where $k$ is a positive constant. The temperature of the rod is 80 °C when $t = 0$, 60 °C when $t = 10$ and 48 °C when $t = 20$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\theta = A + (80 - A)\ee^{-kt}$.`, marks: 3 },
            { label: "(ii)", text: String.raw`Show that $A = 30$, and find the exact value of $\ee^{-10k}$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the time at which the temperature of the rod is 35 °C, giving your answer correct to 1 decimal place.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.5-inflow-outflow",
      name: String.raw`Inflow–outflow models: tanks and drug concentration`,
      tests: String.raw`Forming $\dfrac{\dd x}{\dd t} = \text{rate in} - \text{rate out}$, finding the constant from a stated rate, solving, and interpreting the long-term value and times to reach a threshold; sometimes the model changes part-way (input switched off).`,
      questions: [
        {
          stem: String.raw`An empty tank is being filled with water at a constant rate of 0.5 m³ per minute. At the same time, water leaks out of the tank at a rate proportional to the volume of water in the tank. At time $t$ minutes, the volume of water in the tank is $V$ m³. When $V = 2$, the volume of water is increasing at a rate of 0.3 m³ per minute.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd V}{\dd t} = \dfrac{5 - V}{10}$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $V$ in terms of $t$.`, marks: 4 },
            { label: "(iii)", text: String.raw`Find the time taken for the volume of water in the tank to reach 4 m³, giving your answer correct to 3 significant figures.`, marks: 2 },
            { label: "(iv)", text: String.raw`The tank has a capacity of 6 m³. Explain whether the tank will ever overflow.`, marks: 1 },
          ],
        },
        {
          stem: String.raw`A patient receives a drug through an intravenous drip at a constant rate of 6 mg per hour. The drug is eliminated from the body at a rate proportional to the amount of drug present. At time $t$ hours after the drip is started, the amount of drug in the body is $x$ mg. Initially there is no drug in the body. When $x = 20$, the amount of drug is increasing at a rate of 2 mg per hour.`,
          parts: [
            { label: "(i)", text: String.raw`Show that $\dfrac{\dd x}{\dd t} = 6 - 0.2x$.`, marks: 2 },
            { label: "(ii)", text: String.raw`Find $x$ in terms of $t$, and sketch the graph of $x$ against $t$.`, marks: 5 },
            { label: "(iii)", text: String.raw`State the amount of drug in the body in the long run.`, marks: 1 },
            { label: "(iv)", text: String.raw`The drug is effective when there is at least 25 mg of it in the body. Find the time taken for the drug to become effective, giving your answer correct to 3 significant figures.`, marks: 2 },
            { label: "(v)", text: String.raw`The drip is stopped when $t = 12$. Find the value of $t$ at which the amount of drug in the body falls to 10 mg, giving your answer correct to 3 significant figures.`, marks: 4 },
          ],
        },
      ],
    },
    {
      id: "5.5-logistic",
      name: String.raw`Logistic growth and harvesting models`,
      tests: String.raw`Solving $\dfrac{\dd P}{\dd t} = kP(N - P)$ or a harvested variant using partial fractions, fixing the sign inside the modulus from the initial value, and interpreting equilibria, terms and long-term behaviour in context.`,
      questions: [
        {
          stem: String.raw`A rumour spreads through a school. At time $t$ days, the proportion of students who have heard the rumour is $x$. It is assumed that $x$ increases at a rate proportional to the product of the proportion who have heard the rumour and the proportion who have not. When $t = 0$, $x = 0.1$, and when $t = 2$, $x = 0.5$.`,
          parts: [
            { label: "(i)", text: String.raw`Write down a differential equation relating $x$ and $t$.`, marks: 1 },
            { label: "(ii)", text: String.raw`Show that $\dfrac{x}{1 - x} = \dfrac{1}{9}\ee^{kt}$, where $k$ is a constant, and show that $k = \ln 3$.`, marks: 6 },
            { label: "(iii)", text: String.raw`Find the time at which 90% of the students have heard the rumour.`, marks: 2 },
            { label: "(iv)", text: String.raw`Sketch the graph of $x$ against $t$ for $t \ge 0$.`, marks: 2 },
          ],
        },
        {
          stem: String.raw`The number of fish, $P$ thousand, in a lake at time $t$ years is modelled by the differential equation
$$\frac{\dd P}{\dd t} = \frac{P(100 - P)}{100} - 9.$$`,
          parts: [
            { label: "(i)", text: String.raw`State what the term $-9$ represents in context.`, marks: 1 },
            { label: "(ii)", text: String.raw`Show that $\dfrac{\dd P}{\dd t} = -\dfrac{(P - 10)(P - 90)}{100}$.`, marks: 1 },
            { label: "(iii)", text: String.raw`Given that $P = 50$ when $t = 0$, find $P$ in terms of $t$.`, marks: 6 },
            { label: "(iv)", text: String.raw`State the long-term number of fish in the lake.`, marks: 1 },
            { label: "(v)", text: String.raw`Without solving the differential equation again, describe what happens to the fish population if instead $P = 5$ when $t = 0$. Justify your answer with reference to the differential equation.`, marks: 2 },
          ],
        },
      ],
    },
    {
      id: "5.5-family-of-curves",
      name: String.raw`Sketching a family of solution curves`,
      tests: String.raw`Finding a general solution and sketching several members (different values of the arbitrary constant) on one diagram, showing shared features such as asymptotes, intercepts and symmetry, and identifying the member through a given point.`,
      questions: [
        {
          stem: String.raw`Consider the differential equation $\dfrac{\dd y}{\dd x} = -\dfrac{x}{4y}$.`,
          parts: [
            { label: "(i)", text: String.raw`Find the general solution of the differential equation.`, marks: 3 },
            { label: "(ii)", text: String.raw`Sketch, on a single diagram, three members of the family of solution curves, including the member that passes through the point $(2, 1)$. Describe the shape of the curves.`, marks: 3 },
          ],
        },
        {
          stem: String.raw`Consider the differential equation $\dfrac{\dd y}{\dd x} = 1 - y$.`,
          parts: [
            { label: "(i)", text: String.raw`Show that the general solution is $y = 1 + A\ee^{-x}$, where $A$ is an arbitrary constant.`, marks: 3 },
            { label: "(ii)", text: String.raw`Sketch, on a single diagram, the members of the family of solution curves corresponding to $A = 2$, $A = 0$ and $A = -1$.`, marks: 3 },
            { label: "(iii)", text: String.raw`State a feature common to every member of the family as $x \to \infty$.`, marks: 1 },
          ],
        },
      ],
    },
  ],
});
