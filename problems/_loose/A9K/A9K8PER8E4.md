---
tag: A9K8PER8E4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111432
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1} \in \mathbf{N}^{*}, a_{1} \neq 10^{n}(n=0,1,2, \cdots)$. Now construct the sequence $\left\{a_{n}\right\}: a_{k+1}$ is the sum of the squares of the digits of $a_{k}$. If there exists $T \in \mathbf{N}^{*}$, such that $a_{T+1}=a_{1}$, then $a_{1}$ is called a "periodic number" with period $T$. Prove:
(1) The periodic numbers are and only are $4,16,37,58,89,145,42,20$.
(2) For any positive integer $a_{1}$, there exists $n \in \mathbf{N}^{*}$, such that $a_{n}=1$ or $a_{n}=4$.
