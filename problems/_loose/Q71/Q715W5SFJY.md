---
tag: Q715W5SFJY
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161040
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) Prove that for all natural numbers $n$ the following holds:

$$
\sqrt{n+\sqrt{n^{2}-1}}=\frac{1}{\sqrt{2}}(\sqrt{n+1}+\sqrt{n-1})
$$

(b) Determine $n \in N$ for which

$$
\frac{1}{\sqrt{1+\sqrt{1^{2}-1}}}+\frac{1}{\sqrt{2+\sqrt{2^{2}-1}}}+\cdots+\frac{1}{\sqrt{n+\sqrt{n^{2}-1}}}=\frac{\sqrt{2}}{2}(\sqrt{101}+9)
$$
