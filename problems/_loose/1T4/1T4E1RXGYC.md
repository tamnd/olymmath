---
tag: 1T4E1RXGYC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h427753
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3962
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pumac/2009
    source: hf-ai-mo-aops
    label: 2009 Princeton University Math Competition
---
The sequence of positive real numbers $(x_n)$ is defined recursively as follows: $x_1 = 1$ , and for $n \geq 2$ ,
$$ x_{n} =
\begin{cases}
nx_{n-1} & \text{when }nx_{n-1}\leq 1,
\frac{x_{n-1}}{n} & \text{otherwise}.
\end{cases}
$$ Show that there is an integer $N > 1$ such that $|x_N - 1| < 0.00001$ . Thus the elements of the sequence can get very close to 1 for large $N$ ; however, it is easy to see that they can never be 1 unless $N = 1$ .
