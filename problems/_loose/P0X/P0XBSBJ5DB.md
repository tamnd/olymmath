---
tag: P0XBSBJ5DB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h3293455
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54213
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2024
    source: hf-ai-mo-aops
    label: 2024 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
We consider an integer $n \ge 3,$ the set $S=\{1,2,3,\ldots,n\}$ and the set $\mathcal{F}$ of the functions from $S$ to $S.$ We say that $\mathcal{G} \subset \mathcal{F}$ is a generating set for $\mathcal{H} \subset \mathcal{F}$ if any function in $\mathcal{H}$ can be represented as a composition of functions from $\mathcal{G}.$ a) Let the functions $a:S \to S,$ $a(n-1)=n,$ $a(n)=n-1$ and $a(k)=k$ for $k \in S \setminus \{n-1,n\}$ and $b:S \to S,$ $b(n)=1$ and $b(k)=k+1$ for $k \in S \setminus \{n\}.$ Prove that $\{a,b\}$ is a generating set for the set $\mathcal{B}$ of bijective functions of $\mathcal{F}.$ b) Prove that the smallest number of elements that a generating set of $\mathcal{F}$ has is $3.$
