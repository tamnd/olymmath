---
tag: 2T27GZ3ASM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h401361
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4060
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2009
    source: hf-ai-mo-aops
    label: 2009 Romania National Olympiad
---
Let $(t_n)_n$ a convergent sequence of real numbers, $t_n\in (0,1),\ (\forall)n\in \mathbb{N}$ and $\lim_{n\to \infty} t_n\in (0,1)$ . Define the sequences $(x_n)_n$ and $(y_n)_n$ by

$$x_{n+1}=t_nx_n+(1-t_n)y_n,\ y_{n+1}=(1-t_n)x_n+t_n y_n,\ (\forall)n\in \mathbb{N}$$

and $x_0,y_0$ are given real numbers.

a) Prove that the sequences $(x_n)_n$ and $(y_n)_n$ are convergent and have the same limit.

b) Prove that if $\lim_{n\to \infty} t_n\in \{0,1\}$ , then the question is false.
