---
tag: C8YKA4MFAC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233748
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $\textit{shuffle}$ is a permutation of the integers $1,2,3,4,5$. More formally, a shuffle is a function $f:\{1,2,3,4,5\}\rightarrow\{1,2,3,4,5\}$ such that if $i\neq j$ then $f(i)\neq f(j)$. For example, $12345\mapsto23154$ denotes a shuffle $f$ so that $f(1)=2$, $f(2)=3$, $f(3)=1$, $f(4)=5$, and $f(5)=4$. A shuffle can be repeated some number of times to obtain another shuffle. For example, if $f$ is the shuffle $12345\mapsto23154$ from above, then repeating $f$ twice gives the shuffle $g(x)=f(f(x))$ which is $12345\mapsto31245$. How many shuffles are there that, when repeated $6$ times, give the shuffle $12345\mapsto12345$?
