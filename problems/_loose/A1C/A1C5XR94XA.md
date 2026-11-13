---
tag: A1C5XR94XA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Distinguished subgroup and product) Let $(G, *)$ and $(H, \circledast)$ be two groups, $G^{\prime} \subseteq G$ and $H^{\prime} \subseteq H$ be two distinguished subgroups of $G$ and $H$, and $(G \times H, \odot)$ be the direct product of $G$ and $H$. Show that $G^{\prime} \times H^{\prime}$ is a distinguished subgroup of $G \times H$.

Definition 78. (Quotient of groups) Let $(G, *)$ be a group, $H \subseteq G$ a subgroup of $G$, and $G / H$ the set $\{x * H \mid x \in G\}$: this is the set of subsets of $G$ of the form $\{x * h \mid h \in H\}$, where $x$ is an element of $G$. $G / H$ is called the right quotient of $G$ by $H$ - or the quotient of $G$ by $H$ if $H$ is distinguished.

Remark 79. When working in the set $G / H$, it is common to denote the set $x * H$ simply by $x$. However, if one works simultaneously in $G$, $H$, and $G / H$, it is advisable to always use the notation $x * H$, which is less likely to cause confusion.
