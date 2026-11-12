---
tag: KPZAGJFTJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Provide an example of independent random variables $X$ and $Y$ and a $\sigma$-algebra $\mathscr{G}$ such that on a set of positive measure for some sets $A$ and $B$ the inequality

$$
\mathrm{P}(X \in A, Y \in B \mid \mathscr{G}) \neq \mathrm{P}(X \in A \mid \mathscr{G}) \mathrm{P}(Y \in B \mid \mathscr{G})
$$

holds. In other words, independence does not automatically imply conditional independence.
