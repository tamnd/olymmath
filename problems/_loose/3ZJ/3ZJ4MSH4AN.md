---
tag: 3ZJ4MSH4AN
kind: problem
type: answer
answer: 14.06or2.70
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $a$ be the number of students in the lower grades and their average height, respectively, and $n$ and $b$ be the number of students in the other grades and their average height. Then the average height of the students in the school is $\frac{a m+b n}{m+n}$

By the condition: $a=\alpha b, \alpha=\left(1-\frac{25}{100}\right)=\frac{3}{4}, a=\beta \frac{a m+b n}{m+n}, \beta=\left(1-\frac{15}{100}\right)=\frac{19}{20}$

Therefore, $\alpha b=\beta \frac{\alpha b m+b n}{m+n} \rightarrow \frac{m}{n}=\frac{\beta-\alpha}{\alpha \beta-\alpha}=\frac{8}{9} \approx 0.89$
