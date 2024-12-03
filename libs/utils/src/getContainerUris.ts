import {getDataRegistrationContainers, Session} from "@shared/solid";

export async function getContainerUris(webId: string, shapeTreeUri: string, session: Session): Promise<string[]> {
    return await getDataRegistrationContainers(
        webId,
        shapeTreeUri,
        session
    );
}