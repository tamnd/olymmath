---
tag: MGB4KQTYS9
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266089
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The alphabet in its natural order $\text{ABCDEFGHIJKLMNOPQRSTUVWXYZ}$ is $T_0$. We apply a permutation to $T_0$ to get $T_1$ which is $\text{JQOWIPANTZRCVMYEGSHUFDKBLX}$. If we apply the same permutation to $T_1$, we get $T_2$ which is $\text{ZGYKTEJMUXSODVLIAHNFPWRQCB}$. We continually apply this permutation to each $T_m$ to get $T_{m+1}$. Find the smallest positive integer $n$ so that $T_n=T_0$.
