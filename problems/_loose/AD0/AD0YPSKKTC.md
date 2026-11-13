---
tag: AD0YPSKKTC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A merchant owns three different breeds of horses, with the number of breed $j$ horses being $b_{j}(j=1,2,3)$. Now he wants to distribute these horses to his three sons. It is known that in the mind of son $i$, the value of a horse of breed $j$ is $a_{i j}(i, j=1,2,3)$, where $a_{i j}$ satisfies $a_{i i}>a_{i j}(i \neq j)$. Prove: There exists a positive integer $n$, such that when $\min \left\{b_{1}, b_{2}, b_{3}\right\}>n$, there is always a distribution plan where each son perceives the total value of the horses he receives to be higher than that of the other two.
