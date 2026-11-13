---
tag: 85QAN8R2ZD
kind: problem
type: answer
answer: 2^{\lfloor (n+1)/2 \rfloor}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=122
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let $n$ be a positive integer. Given $2n$ positive real numbers $a_1, a_2, a_3, \dots, a_n$ and $b_1, b_2, b_3, \dots, b_n$ satisfying the following condition:
$$
a_1 > a_2 > a_3 > \dots > a_n \text{ and } b_1 > b_2 > b_3 > \dots > b_n.
$$
A partition of these $2n$ numbers into $n$ disjoint pairs $(a_i, b_j), 1 \le i \le n, 1 \le j \le n$ is called *regular* if the difference between two numbers of each pair is less than $2013$.

a. Suppose that there exists a regular partition for these numbers. Show that the partition $(a_1, b_1), (a_2, b_2), \dots, (a_n, b_n)$ is also regular.

b. Suppose that there exists a regular partition in which $i \neq j$ for each pair $(a_i, b_j)$.
Compute the least number of regular partitions in this case.
