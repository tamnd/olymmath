---
tag: 7MN7GDD57H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pair of positive integers $(a,b)$ is called an **average couple** if there exist positive integers $k$ and $c_1, \dots, c_k$ for which
$$\frac{c_1+c_2+\cdots+c_k}{k}=a \text{and} \frac{s(c_1)+s(c_2)+\cdots+s(c_k)}{k}=b$$
where $s(n)$ denotes the sum of digits of $n$ in decimal representation.
Find the number of average couples $(a,b)$ for which $a,b<10^{10}$.
