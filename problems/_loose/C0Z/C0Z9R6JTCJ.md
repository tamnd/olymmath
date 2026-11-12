---
tag: C0Z9R6JTCJ
kind: problem
type: answer
answer: \frac{\pi}{8}+\frac{\pik}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The original equation is equivalent to

$$
\begin{aligned}
\left(\frac{1-\cos 2 x}{2}\right)^{5}+\left(\frac{1+\cos 2 x}{2}\right)^{5}=\frac{29}{16} \cos ^{4} 2 x & \Longleftrightarrow \\
& \Longleftrightarrow \frac{2+20 \cos ^{2} 2 x+10 \cos ^{4} 2 x}{32}=\frac{29}{16} \cos ^{4} 2 x
\end{aligned}
$$

From which $24 \cos ^{4} 2 x-10 \cos ^{2} 2 x-1=0, \cos ^{2} 2 x=\frac{1}{2}, \cos 4 x=0$.
