---
tag: GXDWG4JSBK
kind: problem
type: answer
answer: "20.366"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=37805
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Al-Karhi's rule for approximating the square root. If $a^{2}$ is the greatest square contained in a given number $N$, and $r$ is the remainder, then

$$
\sqrt{N}=\sqrt{a^{2}+r}=a+\frac{r}{2 a+1}, \text{ if } r<2 a+1
$$

Explain how Al-Karhi might have derived this rule. Evaluate the error by calculating $\sqrt{415}$ in the usual way to an accuracy of $0.001$.
