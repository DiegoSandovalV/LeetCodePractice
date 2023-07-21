/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    if (!heights || !heights.length || !heights[0].length) {
      return [];
    }
  
    const rows = heights.length;
    const cols = heights[0].length;
    const pacific = new Set();
    const atlantic = new Set();
  
    const dfs = (r, c, ocean, prevHeight) => {
      if (r < 0 || c < 0 || r >= rows || c >= cols) return;
      const pos = r + ',' + c;
      if (ocean.has(pos) || heights[r][c] < prevHeight) return;
      ocean.add(pos);
  
      dfs(r - 1, c, ocean, heights[r][c]);
      dfs(r + 1, c, ocean, heights[r][c]);
      dfs(r, c - 1, ocean, heights[r][c]);
      dfs(r, c + 1, ocean, heights[r][c]);
    };
  
    for (let r = 0; r < rows; r++) {
      dfs(r, cols - 1, atlantic, heights[r][cols - 1]);
      dfs(r, 0, pacific, heights[r][0]);
    }
  
    for (let c = 0; c < cols; c++) {
      dfs(rows - 1, c, atlantic, heights[rows - 1][c]);
      dfs(0, c, pacific, heights[0][c]);
    }
  
    const res = [];
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const pos = r + ',' + c;
        if (pacific.has(pos) && atlantic.has(pos)) {
          res.push([r, c]);
        }
      }
    }
  
    return res;
  };
  