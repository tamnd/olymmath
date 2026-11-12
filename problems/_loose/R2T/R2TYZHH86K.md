---
tag: R2TYZHH86K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33471
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ and $B$ be two sets consisting of a finite number of elements $(|A|$ and $|B|$ respectively).

A function $\mathbb{F}: A \rightarrow B$ is a rule that assigns to each $a \in A$ some $b \in B$.

An injection $\mathbb{I}: A \rightarrow B$ is a rule that assigns different elements of $B$ to different elements of $A$. (In this case, $|A| \leqslant|B|$.)

A surjection $\mathbb{S}: A \rightarrow B$ is a rule such that for each $b \in B$, there exists some $a \in A$ such that $\mathbb{S}(a)=b$. (In this case, $|A| \geqslant|B|$.)

A bijection $\mathbb{B}: A \rightarrow B$ is a rule that is both an injection and a surjection. (In this case, $|A|=|B|$.)

Show that the corresponding numbers of functions, injections, surjections, and bijections are given by the following formulas (with $|A|=N,|B|=M$):

$$
N(\mathbb{F})=M^{N}, N(\mathbb{I})=(M)_{N}, N(\mathbb{S})=M!S_{N}^{M}, N(\mathbb{B})=N!
$$
