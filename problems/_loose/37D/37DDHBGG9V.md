---
tag: 37DDHBGG9V
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There were $n$ identical-looking coins weighing $x_{1}, x_{2}, \ldots, x_{n}$ grams (the weights of the coins are pairwise distinct positive real numbers), and also weightless stickers with numbers $x_{1}, x_{2}, \ldots, x_{n}$. At night, a lab assistant weighed the coins and labeled them with stickers. It is required to check using a balance scale that he did not mix anything up. For example, if $n=6, x_{1}=1, \ldots, x_{6}=6$, then this can be done in 2 weighings, verifying that

$$
\begin{aligned}
& 1+2+3=6 \\
& 1+6<3+5
\end{aligned}
$$

Does there exist for $n=8$ a set of weights $x_{1}, x_{2}, \ldots, x_{8}$, the correct labeling of which can be verified in 2 weighings?
