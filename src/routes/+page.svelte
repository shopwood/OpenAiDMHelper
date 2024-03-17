<script lang='ts'>

    let shortDescription = "Roll Character."
    let query = "roll a character sheet, format the result as a compact table. Above the table show the name, class and the race as a title.";
    let queryResult = "";

    async function runOpenAiQuery() {
		queryResult = await runQuery('api/openaiquery', query);
	}

    async function runQuery(endpoint: string, query: string) {
		const response = await fetch('api/openaiquery', {
			method: 'POST',
			body: JSON.stringify({ query }),
			headers: {
				'content-type': 'application/json'
			}
		});

		return (await response.json()).result;
	}

</script>

<div class="container">
    <div class="row">
        <div class = "col-sm">{shortDescription}</div>
        <div class = "col-lg" > <input style="width:100%" bind:value={query}></div> 
        <div class = "col-sm"><button on:click={runOpenAiQuery}>Send</button></div>
        
    </div>
    <div class="row" style="white-space: pre-line">{queryResult}</div>

</div>


