---
tag: 2FHDMVSHVY
kind: problem
type: answer
answer: \frac{76}{15} \approx 5.06
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265460
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A mouse is on the below grid:
\begin{center}
\begin{asy}
unitsize(2cm);
filldraw(circle((0,0),0.07), black);
filldraw(circle((0,1),0.07), black);
filldraw(circle((1,0),0.07), black);
filldraw(circle((0.5,0.5),0.07), black);
filldraw(circle((1,1),0.07), black);
draw((0,0)--(1,0));
draw((0,0)--(0,1));
draw((1,0)--(1,1));
draw((0,1)--(1,1));
draw((0,1)--(0.5,0.5));
draw((1,0)--(0.5,0.5));
draw((1,1)--(0.5,0.5));
draw((0,0)--(0.5,0.5));
\end{asy}
\end{center}
The paths connecting each node are the possible paths the mouse can take to walk from a node to another node. Call a ``turn" the action of a walk from one node to another. Given the mouse starts off on an arbitrary node, what is the expected number of turns it takes for the mouse to return to its original node?

*Lightning 4.2*
