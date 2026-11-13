---
tag: X8VMN240ZY
kind: problem
type: answer
answer: \frac{1}{\sqrt{2}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the largest constant $c>0$ such that for every positive integer $n\ge 2$, there always exist a positive divisor $d$ of $n$ such that $$d\le \sqrt{n}\hspace{0.5cm} \text{and} \hspace{0.5cm} \tau(d)\ge c\sqrt{\tau(n)}$$ where $\tau(n)$ is the number of divisors of $n$.

*Proposed by Mohd. Suhaimi Ramly*
