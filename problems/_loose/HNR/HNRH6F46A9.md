---
tag: HNRH6F46A9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=99037
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a quadrilateral $ABCD$ where $AB=a, BC=b, CD=c, DA=d$, the area is $S$, and the semi-perimeter is $p$, prove:
(1)
$$
\begin{aligned}
16 S^{2}= & 4\left(b^{2} c^{2}+a^{2} d^{2}\right)-8 a b c d \cos (A+C) \\
& -\left(b^{2}+c^{2}-a^{2}-d^{2}\right)^{2}
\end{aligned}
$$
(2) $S=\sqrt{(p-a)(p-b)(p-c)(p-d)-a b c d \cos ^{2} \frac{A+C}{2}}$.
