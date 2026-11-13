---
tag: WZBCGYZ67M
kind: problem
type: answer
answer: 2025,5609,proof
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=74203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Professor Piraldo knows many multiplication tricks. One day, Juquinha asked what $62 \cdot 68$ equals, and the professor quickly answered 4216. After a few minutes of excitement from the class, he decided to explain this trick. The trick works when multiplying two two-digit numbers that have the same tens digit and the sum of the units is 10. In the example, both have 6 in the tens place and $2+8=10$. He explained that the result can have up to 4 digits, the product of the units defines the last 2 digits, and the first 2 digits, when there are two since the result can have three digits in total, are the result of the tens digit multiplied by its successor.

(a) Using the trick, calculate $45 \cdot 45$.

(b) Using the trick, calculate $71 \cdot 79$.

(c) Now let's prove that the trick works. Consider two two-digit numbers $\overline{a b}=10 a+b$ and $\overline{a c}=10 a+c$, with $b+c=10$. Show that the product $b \cdot c$ determines the last 2 digits and $a(a+1)$ determines the first 2 digits of the product $\overline{a b} \cdot \overline{a c}$.
