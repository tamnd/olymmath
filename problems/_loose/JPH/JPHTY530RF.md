---
tag: JPHTY530RF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339729
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14570
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $n$ be a positive integer. Yang the Saltant Sanguivorous Shearling is on the side of a very steep mountain that is embedded in the coordinate plane. There is a blood river along the line $y=x$ , which Yang may reach but is not permitted to go above (i.e. Yang is allowed to be located at $(2016,2015)$ and $(2016,2016)$ , but not at $(2016,2017)$ ). Yang is currently located at $(0,0)$ and wishes to reach $(n,0)$ . Yang is permitted only to make the following moves:

(a) Yang may *spring*, which consists of going from a point $(x,y)$ to the point $(x,y+1)$ .
(b) Yang may *stroll*, which consists of going from a point $(x,y)$ to the point $(x+1,y)$ .
(c) Yang may *sink*, which consists of going from a point $(x,y)$ to the point $(x,y-1)$ .

In addition, whenever Yang does a *sink*, he breaks his tiny little legs and may no longer do a *spring* at any time afterwards. Yang also expends a lot of energy doing a *spring* and gets bloodthirsty, so he must visit the blood river at least once afterwards to quench his bloodthirst. (So Yang may still *spring* while bloodthirsty, but he may not finish his journey while bloodthirsty.) Let there be $a_n$ different ways for which Yang can reach $(n,0)$ , given that Yang is permitted to pass by $(n,0)$ in the middle of his journey. Find the $2016$ th smallest positive integer $n$ for which $a_n\equiv 1\pmod 5$ .

*Proposed by James Lin*
