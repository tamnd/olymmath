---
tag: RXE1HWNHEY
kind: problem
type: answer
answer: \vec{C}=\frac{k\vec{B}-\vec{A}}{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's fix a point $O$ on the plane. Any other point $A$ is uniquely determined by its radius vector $\overrightarrow{O A}$, which we will simply denote as $\vec{A}$. We will use this concept and notation repeatedly in the following. The fixed point $O$ is conventionally called the initial point. We will also introduce the symbol $(A B C)$ - the simple ratio of three points $A, B, C$ lying on the same line; points $A$ and $B$ are called the base points, and point $C$ is the dividing point. The symbol $(A B C)$ is a number determined by the formula:

$$
\overrightarrow{C A}=(A B C) \cdot \overrightarrow{C B}
$$

Furthermore, for two collinear vectors $\vec{a}$ and $\vec{b}$, there is a unique number $\lambda$ such that $\vec{a}=\lambda \vec{b}$. We introduce the notation $\lambda=\frac{\vec{a}}{\vec{b}}$ (the ratio of collinear vectors). In this case, we can write:

$$
(A B C)=\frac{\overrightarrow{C A}}{\overrightarrow{C B}}
$$

Remark. The notation for the ratio of vectors is not related to the scalar product of vectors! (For example, the relation $\frac{\vec{a}}{\vec{b}}=\frac{\vec{c}}{\vec{d}}$ implies $\vec{a}=\lambda \vec{b}$ and $\vec{c}=\lambda \vec{d}$, from which $\vec{a} \cdot \vec{d}=(\lambda \vec{b}) \cdot \left(\frac{1}{\lambda} \vec{c}\right)=\vec{b} \cdot \vec{c}$, but the converse is not true - from the relation $\vec{a} \cdot \vec{d}=\vec{b} \cdot \vec{c}$ it does not follow that $\frac{\vec{a}}{\vec{b}}=\frac{\vec{c}}{\vec{d}}$ : vectors $\vec{a}$ and $\vec{b}$ do not have to be collinear. Provide a corresponding example.)

Derive a formula expressing the vector $\vec{C}$ in terms of the vectors $\vec{A}$ and $\vec{B}$, given that $(A B C)=k$.
