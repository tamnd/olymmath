---
tag: TQA8CTHHSZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1995 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86726
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1995
    source: hf-ai-mo-aops
    label: 1995 IberoAmerican
---
A function $f: \N\rightarrow\N$ is circular if for every $p\in\N$ there exists $n\in\N,\ n\leq{p}$ such that $f^n(p)=p$ ( $f$ composed with itself $n$ times) The function $f$ has repulsion degree $k>0$ if for every $p\in\N$ $f^i(p)\neq{p}$ for every $i=1,2,\dots,\lfloor{kp}\rfloor$ . Determine the maximum repulsion degree can have a circular function.**Note:** Here $\lfloor{x}\rfloor$ is the integer part of $x$ .
