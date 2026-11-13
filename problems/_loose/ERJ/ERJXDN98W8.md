---
tag: ERJXDN98W8
kind: problem
type: answer
answer: n = 2^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212019
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $n$ lamps clockwise numbered from $1$ to $n$ on a circle.

Let $\xi$ to be a configuration where $0 \le \ell \le n$ random lamps are turned on. A *cool procedure* consists in perform, simultaneously, the following operations: for each one of the $\ell$ lamps which are turned on, we verify the number of the lamp; if $i$ is turned on, a *signal* of range $i$ is sent by this lamp, and it will be received only by the next $i$ lamps which follow $i$, turned on or turned off, also considered clockwise. At the end of the operations we verify, for each lamp, turned on or turned off, how many signals it has received. If it was reached by an even number of signals, it remains on the same state(that is, if it was turned on, it will be turned on; if it was turned off, it will be turned off). Otherwise, it's state will be changed.

The example in attachment, for $n=4$, ilustrates a configuration where lamps $2$ and $4$ are initially turned on. Lamp $2$ sends signal only for the lamps $3$ e $4$, while lamp $4$ sends signal for lamps $1$, $2$, $3$ e $4$. Therefore, we verify that lamps $1$ e $2$ received only one signal, while lamps $3$ e $4$ received two signals. Therefore, in the next configuration, lamps $1$ e $4$ will be turned on, while lamps $2$ e $3$ will be turned off.

Let $\Psi$ to be the set of all $2^n$ possible configurations, where $0 \le \ell \le n$ random lamps are turned on. We define a function $f: \Psi \rightarrow \Psi$ where, if $\xi$ is a configuration of lamps, then $f(\xi)$ is the configurations obtained after we perform the *cool procedure* described above.

Determine all values of $n$ for which $f$ is bijective.
