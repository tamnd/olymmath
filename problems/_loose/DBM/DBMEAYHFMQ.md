---
tag: DBMEAYHFMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2558760
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39101
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236433
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/1993
    source: hf-ai-mo-aops
    label: 1993 French Mathematical Olympiad
---
Assume we are given a set of weights, $x_1$ of which have mass $d_1$ , $x_2$ have mass $d_2$ , etc, $x_k$ have mass $d_k$ , where $x_i,d_i$ are positive integers and $1\le d_1<d_2<\ldots<d_k$ . Let us denote their total sum by $n=x_1d_1+\ldots+x_kd_k$ . We call such a set of weights *perfect* if each mass $0,1,\ldots,n$ can be uniquely obtained using these weights.

(a) Write down all sets of weights of total mass $5$ . Which of them are perfect?
(b) Show that a perfect set of weights satisfies $$ (1+x_1)(1+x_2)\cdots(1+x_k)=n+1. $$ (c) Conversely, if $(1+x_1)(1+x_2)\cdots(1+x_k)=n+1$ , prove that one can uniquely choose the corresponding masses $d_1,d_2,\ldots,d_k$ with $1\le d_1<\ldots<d_k$ in order for the obtained set of weights is perfect.
(d) Determine all perfect sets of weights of total mass $1993$ .
