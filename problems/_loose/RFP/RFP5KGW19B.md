---
tag: RFP5KGW19B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239251
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n>1$ be any integer. Define $f,g$ as functions from $\{0,1,2,\cdots,n-1 \}$ to $\{0,1,2,\cdots,n-1\}$ defined as
\begin{align*}
&f(i)=2i \pmod{n} \\
&g(i)=2i+1 \pmod{n} \end{align*}
Show that for any integers $\ell,m \in \{0,1,2,\cdots,n-1 \}$ , there are infinitely many compositions of $f,g$ that map $\ell$ to $m$
