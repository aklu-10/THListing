export async function getResource(url)
{   
    try
    {
        return (await fetch(url)).json();
    }catch(err){
        throw new Error(err);
    }
}

export async function postResource()
{

}

export async function updateResource()
{

}

export async function deleteResource()
{

}
