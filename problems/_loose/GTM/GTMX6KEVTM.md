---
tag: GTMX6KEVTM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238722
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Imagine the unit square in the plane to be a *carrom board*. Assume the *striker* is just a point, moving with no friction (so it goes forever), and that when it hits an edge, the angle of reﬂection is equal to the angle of incidence, as in real life. If the striker ever hits a corner it falls into the pocket and disappears. The trajectory of the striker is completely determined by its starting point $(x,y)$ and its initial velocity $\overrightarrow{(p,q)}$.

If the striker eventually returns to its initial state (i.e. initial position and initial velocity), we deﬁne its *bounce number* to be the number of edges it hits before returning to its initial state for the $1^{\text{st}}$ time.

For example, the trajectory with initial state $[(.5,.5);\overrightarrow{(1,0)}]$ has bounce number $2$ and it returns to its initial state for the $1^{\text{st}}$ time in $2$ time units. And the trajectory with initial state $[(.25,.75);\overrightarrow{(1,1)}]$ has bounce number $4$.

$\textbf{(a)}$ Suppose the striker has initial state $[(.5,.5);\overrightarrow{(p,q)}]$. If $p>q\geqslant 0$ then what is its velocity after it hits an edge for the $1^{\text{st}}$ time ? What if $q>p\geqslant 0$ ?

$\textbf{(b)}$ Draw a trajectory with bounce number $5$ or justify why it is impossible.

$\textbf{(c)}$ Consider the trajectory with initial state $[(x,y);\overrightarrow{(p,0)}]$ where $p$ is a positive integer. In how much time will the striker $1^{\text{st}}$ return to its initial state ?

$\textbf{(d)}$ What is the bounce number for the initial state $[(x,y);\overrightarrow{(p,q)}]$ where $p,q$ are relatively prime positive integers, assuming the striker never hits a corner ?
