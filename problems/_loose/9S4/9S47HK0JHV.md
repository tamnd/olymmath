---
tag: 9S47HK0JHV
kind: problem
type: answer
answer: a_n = 1 + n! \sum_{i=0}^n \frac{1}{i!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_n=1+n!(\frac{1}{0!}+\frac{1}{1!}+\frac{1}{2!}+...+\frac{1}{n!})$ for any $n\in \mathbb{Z}^{+}$. Consider $a_n$ points in the plane,no $3$ of them collinear.The segments between any $2$ of them are colored in one of $n$ colors. Prove that among them there exist $3$ points forming a monochromatic triangle.
