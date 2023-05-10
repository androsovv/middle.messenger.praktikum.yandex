import Block from "./Block";

function isEqual(lhs: string, rhs: string): boolean {
    return lhs === rhs;
}

function render(query: string, block: Block) {
    const root = document.querySelector(query);
    if (root) {
        root.innerHTML = '';
        root.append(block.getContent()!);
    }
}

class Route {
    _pathname: string;

    _blockClass:  Block | null;

    _block: Block | null;

    _props: Record<string, string>;

    constructor(pathname: string, view: Block | null, props: Record<string, string>) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
    }

    navigate(pathname: string): void {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave(): void {
        if (this._block) {
            this._block.hide();
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render(): void {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
            render(this._props.rootQuery, this._block!);
            return;
        }
        this._block.show();
    }
}


 class Router {
    history!: History;
    routes: any;
    _currentRoute!: Route | null;
    static __instance: Router | null;
    _rootQuery!: string;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            return Router.__instance;
        }

        this.routes = [];
        this.history = window.history;
        this._currentRoute = null;
        this._rootQuery = rootQuery;

        Router.__instance = this;
    }

    use(pathname: string, block: Block, props: any) {
        const route = new Route(pathname, block, {rootQuery: this._rootQuery});
        this.routes.push(route);

        return this;
    }

    start(): void {
        window.onpopstate = (event: Event) => {
            const target = event.currentTarget as Window;
            this._onRoute(target.location.pathname)
        };

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string): void {
        const route = this.getRoute(pathname);

        if (!route) {
            return;
        }

        if (this._currentRoute) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;

        route.render();
    }

    go(pathname: string): void {
        this.history.pushState({}, "", pathname);

        this._onRoute(pathname);
    }

    back(): void {
        this.history.back();
    }

    forward(): void {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find(route => route.match(pathname));
    }
}

export default new Router('.root');
