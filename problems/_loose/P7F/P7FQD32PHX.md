---
tag: P7FQD32PHX
kind: problem
type: answer
answer: "764049"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73525
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A technique widely used to calculate summations is the Telescoping Sum. It consists of "decomposing" the terms of a sum into parts that cancel each other out. For example,

$$
\begin{aligned}
& \frac{1}{1 \cdot 2}+\frac{1}{2 \cdot 3}+\frac{1}{3 \cdot 4}+\frac{1}{4 \cdot 5}= \\
& \left(\frac{1}{1}-\frac{1}{2}\right)+\left(\frac{1}{2}-\frac{1}{3}\right)+\left(\frac{1}{3}-\frac{1}{4}\right)+\left(\frac{1}{4}-\frac{1}{5}\right)= \\
& \frac{1}{1}-\frac{1}{5}= \\
& \frac{4}{5}
\end{aligned}
$$

With this technique, we can find a way to sum consecutive odd numbers. Let's see:

a) Counting the odd numbers one by one starting from 1, verify that the number at position $m$ is equal to $m^{2}-(m-1)^{2}$.

b) Calculate the sum of all odd numbers between 1000 and 2014.
