---
tag: BA008EG5MK
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164836
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's calculate the value of the expression $P$, where the number of nested radicals is $n$ (>1).

$$
\begin{aligned}
& P=\sqrt{a+\sqrt{a+\ldots+\sqrt{a+\sqrt{b}}}}, \text{ where } \\
& a=\sqrt{76+24 \sqrt{10}}-2 \sqrt{19-3 \sqrt{40}} \text{ and } \\
& b=\sqrt{165+4 \sqrt{1616}}-\sqrt{165-4 \sqrt{1616}}
\end{aligned}
$$

Create a similar expression with the same properties.
