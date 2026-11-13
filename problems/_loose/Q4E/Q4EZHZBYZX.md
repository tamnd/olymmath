---
tag: Q4EZHZBYZX
kind: problem
type: answer
answer: 7/2 n^2 − 3/2 n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=23
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst
    source: hf-mathnet
    label: China China National Team Selection Test
---
Let $3n^2$ be the vertex number of a simple graph $G$ (integer $n \ge 2$). If the degree of each vertex is not greater than $4n$, there exists at least one vertex with degree $1$, and there exists a route with length not greater than $3$ between any two vertices. Prove that the minimum number of edges of $G$ is $\frac{7}{2}n^2 - \frac{3}{2}n$.

**Remark.** A route between two distinct vertices $u$ and $v$ with length $k$ is a sequence of vertices $u = v_0, v_1, \dots, v_k = v$, where $v_i$ and $v_{i+1}$, $i = 0, 1, \dots, k-1$, are adjacent. (posed by Leng Gangsong)
