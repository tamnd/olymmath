---
tag: KFBDD56M40
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
${ }^{+}$ We call a vertex set $S$ of a directed graph $D$ a core, if for every vertex $v \in D-S$, $D$ contains a directed $v-S$ path. Furthermore, if no two vertices in $S$ are connected by a directed path in $D$, we call $S$ a strong core. First, prove that every core contains a strong core. Then, inductively partition $V(D)$ into "levels" $L_{0}, \ldots, L_{n}$, such that for even $i, L_{i}$ is a suitable strong core in $D_{i}:=D-\left(L_{0} \cup \cdots \cup L_{i-1}\right)$; and for odd $i, L_{i}$ consists of the vertices in $D_{i}$ that are connected to $L_{i-1}$. Prove: If $D$ does not contain a directed odd cycle, then the union of its even levels forms a core of $D$.
