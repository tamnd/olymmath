---
tag: JH9GJ8MFRJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0002.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
Each member of a population has two genes (possibly repeated) among the genes $G_1, G_2, \dots, G_n$. Suppose that, in generation 0 of this population, $p_{ij}(0)$ ($1 \le i, j \le n$) is the proportion of members of this population with genotype $G_i G_j$ (or $G_j G_i$, which is biologically identical to $G_i G_j$).
To generate each member of generation $k+1$, two members of generation $k$ are chosen independently and at random, and one gene of each member is chosen independently and at random: these two genes will be the genotype of their breed. Let $p_{ij}(k)$ be the probability that a member of generation $k$ has genotype $G_i G_j$ (or $G_j G_i$). Suppose the population is big enough in a way that at least two members are generated.
Prove that $p_{ij}(2012) = p_{ij}(2013)$ for all $i, j$ ($1 \le i, j \le n$).
