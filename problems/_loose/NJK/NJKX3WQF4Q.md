---
tag: NJKX3WQF4Q
kind: problem
type: answer
answer: "2021"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267274
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Finished with rereading Isaac Asimov's $\textit{Foundation}$ series, Joshua asks his father, "Do you think somebody will build small devices that run on nuclear energy while I'm alive?"

"Honestly, Josh, I don't know. There are a lot of very different engineering problems involved in designing such devices. But technology moves forward at an amazing pace, so I won't tell you we can't get there in time for you to see it. I $\textit{did}$ go to a graduate school with a lady who now works on $\textit{portable}$ nuclear reactors. They're not small exactly, but they aren't nearly as large as most reactors. That might be the first step toward a nuclear-powered pocket-sized video game.

Hannah adds, "There are already companies designing batteries that are nuclear in the sense that they release energy from uranium hydride through controlled exoenergetic processes. This process is not the same as the nuclear fission going on in today's reactors, but we can certainly call it $\textit{nuclear energy}$."

"Cool!" Joshua's interest is piqued.

Hannah continues, "Suppose that right now in the year $2008$ we can make one of these nuclear batteries in a battery shape that is $2$ meters $\textit{across}$. Let's say you need that size to be reduced to $2$ centimeters $\textit{across}$, in the same proportions, in order to use it to run your little video game machine. If every year we reduce the necessary volume of such a battery by $1/3$, in what year will the batteries first get small enough?"

Joshua asks, "The battery shapes never change? Each year the new batteries are similar in shape - in all dimensions - to the bateries from previous years?"

"That's correct," confirms Joshua's mother. "Also, the base $10$ logarithm of $5$ is about $0.69897$ and the base $10$ logarithm of $3$ is around $0.47712$." This makes Joshua blink. He's not sure he knows how to use logarithms, but he does think he can compute the answer. He correctly notes that after $13$ years, the batteries will already be barely more than a sixth of their original width.

Assuming Hannah's prediction of volume reduction is correct and effects are compounded continuously, compute the first year that the nuclear batteries get small enough for pocket video game machines. Assume also that the year $2008$ is $7/10$ complete.
