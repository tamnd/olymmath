---
tag: YY4YTNCPCF
kind: problem
type: answer
answer: "100"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a positive integer s such that there are s solutions to the equation
$64sin^2(2x)+tan^2(x)+cot^2(x)=46$ in the interval $(0,\frac{\pi}{2})$ all of the form $\frac{m_k}{n_k}\pi$
where $m_k$ and $n_k$ are relatively prime positive integers, for $k = 1, 2, 3, . . . , s$. Find $(m_1 + n_1) + (m_2 + n_2) + (m_3 + n_3) + · · · + (m_s + n_s)$.
