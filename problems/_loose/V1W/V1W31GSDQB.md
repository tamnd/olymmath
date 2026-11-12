---
tag: V1W31GSDQB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=4083
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2011
    source: hf-numina-olympiads
    label: HMMT February
---
Let $f(x)=x^{2}-r_{2} x+r_{3}$ for all real numbers $x$, where $r_{2}$ and $r_{3}$ are some real numbers. Define a sequence $\left\{g_{n}\right\}$ for all nonnegative integers $n$ by $g_{0}=0$ and $g_{n+1}=f\left(g_{n}\right)$. Assume that $\left\{g_{n}\right\}$ satisfies the following three conditions: (i) $g_{2 i}<g_{2 i+1}$ and $g_{2 i+1}>g_{2 i+2}$ for all $0 \leq i \leq 2011$; (ii) there exists a positive integer $j$ such that $g_{i+1}>g_{i}$ for all $i>j$, and (iii) $\left\{g_{n}\right\}$ is unbounded. If $A$ is the greatest number such that $A \leq\left|r_{2}\right|$ for any function $f$ satisfying these properties, find $A$.
