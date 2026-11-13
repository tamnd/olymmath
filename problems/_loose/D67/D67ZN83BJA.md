---
tag: D67ZN83BJA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269243
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A,B,C$ be nonempty sets in $\mathbb R^n$. Suppose that $A$ is bounded, $C$ is closed and convex, and $A+B\subseteq A+C$. Prove that
$B\subseteq C$.
Recall that $E+F=\{e+f:e\in E,f\in F\}$ and $D\subseteq\mathbb R^n$ is convex iff $tx+(1-t)y\in D$ for all $x,y\in D$ and any $t\in[0,1]$.
